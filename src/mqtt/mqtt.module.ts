import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { ClientsModule } from '@nestjs/microservices';
import { MqttController } from './mqtt.controller'
import { MQTT_SERVICE } from './mqtt.constants'
import { MqttService } from './mqtt.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceModule } from '../device/device.module';

@Module({
  imports: [
    ClientsModule.register([{ name: MQTT_SERVICE, transport: Transport.MQTT }]),
    MongooseModule.forRoot('mongodb://localhost/jff', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    DeviceModule,
  ],
  controllers: [MqttController],
  providers: [MqttService],
})
export class MqttModule {}
