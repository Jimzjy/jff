import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MqttService } from './mqtt.service'

@Controller()
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @MessagePattern('sum')
  sum(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }

}
