import { Resolver, Args, Query, Mutation, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, UserInput, DeleteResult } from 'src/graphql.schema';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('user')
  async getUser(@Args('id') id: string): Promise<User> {
    return await this.userService.findOneById(id)
  }

  @Query('users')
  async getUsers(): Promise<User[]> {
    return await this.userService.findAll()
  }

  @Query('userLogin')
  async userLogin(@Context() context: any, @Args('name') name: string): Promise<User | boolean> {
    return await this.userService.login(context, name)
  }

  @Mutation('createUser')
  async createUser(@Args('user') user: UserInput): Promise<User> {
    return await this.userService.create(user)
  }

  @Mutation('deleteUsers')
  async deleteUsers(@Args('ids') ids: string[]): Promise<DeleteResult> {
    return await this.userService.delete(ids)
  }

  @Mutation('updateUser')
  async updateUser(@Args('id') id: string, @Args('data') data: UserInput): Promise<User> {
    return await this.userService.update(id, data)
  }
}
