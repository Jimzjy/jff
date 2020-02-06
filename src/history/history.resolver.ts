import { Resolver, Args, Query } from '@nestjs/graphql';
import { HistoryService } from './history.service'
import { History } from 'src/graphql.schema'

@Resolver('history')
export class HistoryResolver {
  constructor(private readonly historyService: HistoryService) {}

  @Query('history')
  async getHistory(@Args('type') type: string): Promise<History[]> {
    return await this.historyService.getHistory(type)
  }
}
