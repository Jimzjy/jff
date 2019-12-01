import { Module } from '@nestjs/common';
import { DeviceResolver } from './device.resolver';
import { DeviceService } from './device.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceSchema } from './schemas/device.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Device', schema: DeviceSchema }])],
  providers: [DeviceResolver, DeviceService],
})
export class DeviceModule {}
