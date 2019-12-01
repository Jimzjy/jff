import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Device } from 'src/graphql.schema'

@Injectable()
export class DeviceService {
  constructor(@InjectModel('Device') private readonly deviceModel: Model<Device>) {}

  // async findOneById(id: number){
  // }

  async findAll(): Promise<Device[]> {
    return await this.deviceModel.find().exec()
  }

  async create(device: Device): Promise<Device> {
    const createModel = new this.deviceModel(device)
    return await createModel.save()
  }
}
