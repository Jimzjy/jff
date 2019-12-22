import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MqttService } from './mqtt.service'

@Controller()
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @MessagePattern('command')
  command(id: string, command: string, data: string) {
    
  }

}
