import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices';
import { MQTT_SERVICE } from './mqtt.constants';

@Injectable()
export class MqttService {
  constructor(@Inject(MQTT_SERVICE) private readonly client: ClientProxy) {}

}
