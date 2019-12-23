import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { ClientsModule } from '@nestjs/microservices';
import { MqttController } from './mqtt.controller'
import { MQTT_SERVICE } from './mqtt.constants'
import { MqttService } from './mqtt.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceSchema } from '../device/schemas/device.schema'

@Module({
  imports: [
    ClientsModule.register([{ name: MQTT_SERVICE, transport: Transport.MQTT }]),
    MongooseModule.forRoot('mongodb://localhost/jff', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: 'Device', schema: DeviceSchema }]),
  ],
  controllers: [MqttController],
  providers: [MqttService],
})
export class MqttModule {}
