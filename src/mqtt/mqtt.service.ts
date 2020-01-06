import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy, Client, Transport } from '@nestjs/microservices'
import { MQTT_SERVICE } from './mqtt.constants'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { DeviceModel } from '../device/interfaces/device.interface'

@Injectable()
export class MqttService {
  constructor(
    @Inject(MQTT_SERVICE) private readonly client: ClientProxy,
    @InjectModel('Device') private readonly deviceModel: Model<DeviceModel>,
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
  }

  transferCommand(id: string, command: string, data?: string) {
    this.client.send(`/${id}/${command}`, data ? data : '').toPromise()
  }
}
