import { Resolver, Args, Query } from '@nestjs/graphql';
import { HistoryService } from './history.service'
import { History } from 'src/graphql.schema'

@Resolver('history')
export class HistoryResolver {
  constructor(private readonly deviceService: HistoryService) {}

  @Query('history')
  async getHistory(@Args('type') type: string): Promise<History[]> {
    return await this.deviceService.getHistory(type)
  }
}
