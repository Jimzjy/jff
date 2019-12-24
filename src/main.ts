import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MqttModule } from './mqtt/mqtt.module'
import { Transport } from '@nestjs/microservices';

const aedes = require('aedes')()
const mqttServer = require('net').createServer(aedes.handle)
const mqttPort = 1883

aedes.on('subscribe', function (subscriptions, client) {
  console.log('MQTT client \x1b[32m' + (client ? client.id : client) +
          '\x1b[0m subscribed to topics: ' + subscriptions.map(s => s.topic).join('\n'), 'from broker', aedes.id)
})

mqttServer.listen(mqttPort)

async function bootstrapHttp() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrapHttp()

async function bootstrapMqtt() {
  const app = await NestFactory.createMicroservice(MqttModule, {
    transport: Transport.MQTT,
    options: {
      port: 1883,
    },
  })
  await app.listenAsync()
}
bootstrapMqtt()
