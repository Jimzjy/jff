import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { MQTT_SERVICE } from './mqtt.constants'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { DeviceModel } from '../device/interfaces/device.interface'
import { HistoryModel } from '../history/interfaces/history.interface'

@Injectable()
export class MqttService {
  constructor(
    @Inject(MQTT_SERVICE) private readonly client: ClientProxy,
    @InjectModel('Device') private readonly deviceModel: Model<DeviceModel>,
    @InjectModel('History') private readonly historyModel: Model<HistoryModel>,
  ) {}

  async handleCommand(id: string, command: string, data?: string) {
    const device = await this.deviceModel.findById(id)
    const links = device.links
    if (!links) {
      return
    }
    links.map(item => {
      if (item.from === command) {
        this.transferCommand(item.toID, item.to, data)
      }
    })
    let user
    try {
      user = JSON.parse(data)
    } finally {
      if (user) {
        const historyRecord = await this.historyModel.create({
          username: user.name,
          userID: user.id,
          command,
          device: device.name,
          deviceID: id,
          time: Date.now(),
        })
        console.log(historyRecord)
      }
    }
  }

  transferCommand(id: string, command: string, data?: string) {
    this.client.send(`/${id}/${command}`, data ? data : '').toPromise()
  }
}
