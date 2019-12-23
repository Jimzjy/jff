import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { DeviceService } from './device.service';
import { Device, DeviceInput, DeleteResult } from 'src/graphql.schema';

@Resolver('Device')
export class DeviceResolver {
  constructor(private readonly deviceService: DeviceService) {}

  @Query('device')
  async getDevice(@Args('id') id: string): Promise<Device> {
    return await this.deviceService.findOneById(id)
  }

  @Query('devices')
  async getDevices(): Promise<Device[]> {
    return await this.deviceService.findAll()
  }

  @Mutation('createDevice')
  async createDevice(@Args('device') device: DeviceInput): Promise<Device> {
    return await this.deviceService.create(device)
  }

  @Mutation('deleteDevices')
  async deleteDevices(@Args('ids') ids: string[]): Promise<DeleteResult> {
    return await this.deviceService.delete(ids)
  }

  @Mutation('updateDevice')
  async updateDevice(@Args('id') id: string, @Args('data') data: DeviceInput): Promise<Device> {
    return await this.deviceService.update(id, data)
  }
}
