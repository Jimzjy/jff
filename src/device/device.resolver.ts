import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { DeviceService } from './device.service';
import { Device } from 'src/graphql.schema';

@Resolver('Device')
export class DeviceResolver {
  constructor(private readonly deviceService: DeviceService) {}

  // @Query('device')
  // async getDevice(@Args('id') id: number) {
  //   return await this.deviceService.findOneById(id)
  // }

  @Query('devices')
  async getDevices() {
    return await this.deviceService.findAll()
  }

  @Mutation('createDevice')
  async createDevice(@Args('device') device: Device) {
    return await this.deviceService.create(device)
  }
}
