import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { HistoryModel } from './interfaces/history.interface'
import { History } from 'src/graphql.schema'

@Injectable()
export class HistoryService {
  constructor(@InjectModel('History') private readonly historyModel: Model<HistoryModel>) {}

  async getHistory(type: string): Promise<History[]> {
    switch (type) {
      case 'day':
        const datetime = new Date(new Date().toLocaleDateString()).getTime()
        return await this.historyModel.find({ time: { $gte: datetime } })
      case 'week':
        const nowDate = new Date(new Date().toLocaleDateString()).getTime()
        const date = new Date(nowDate - 6 * 86400000).getTime()
        return await this.historyModel.find({ time: { $gte: date } })
      default:
        return await this.historyModel.find()
    }
  }
}
