import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';

@Controller()
export class MqttController {

  @MessagePattern('sum')
  sum(data: number[]): number {
    console.log(data)
    return (data || []).reduce((a, b) => a + b);
  }
}
