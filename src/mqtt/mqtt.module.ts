import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { ClientsModule } from '@nestjs/microservices';
import { MqttController } from './mqtt.controller'
import { MQTT_SERVICE } from './mqtt.constants'
import { MqttService } from './mqtt.service';

@Module({
  imports: [
    ClientsModule.register([{ name: MQTT_SERVICE, transport: Transport.MQTT }]),
  ],
  controllers: [MqttController],
  providers: [MqttService],
})
export class MqttModule {}
