import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MqttService } from './mqtt.service'
import { PitServiceData } from './interfaces/mqtt.interface';

@Controller()
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @MessagePattern('pitservice')
  pitservice(serviceData: PitServiceData): number {
    const { id, command, data } = serviceData
    this.mqttService.handleCommand(id, command, data)
    return 1
  }
}
