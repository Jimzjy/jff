import { Module } from '@nestjs/common';
import { HistoryResolver } from './history.resolver';
import { HistoryService } from './history.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HistorySchema } from './schemas/history.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'History', schema: HistorySchema }])],
  providers: [HistoryResolver, HistoryService],
})
export class HistoryModule {}
