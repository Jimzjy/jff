import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { ClientsModule } from '@nestjs/microservices';
import { MqttController } from './mqtt.controller'

@Module({
  controllers: [MqttController],
})
export class MqttModule {}