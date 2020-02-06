import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserInput, DeleteResult } from 'src/graphql.schema'
import { UserModel } from './interfaces/user.interface'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserModel>) {}

  async findOneById(id: string): Promise<User> {
    return await this.userModel.findById(id)
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find()
  }

  async login(context: any, name: string): Promise<boolean> {
    const user: User = await this.userModel.findOne({ name })
    if (!user) {
      return false
    }
    context.res.cookie('user', JSON.stringify(user))
    return true
  }

  async create(user: UserInput): Promise<User> {
    return await this.userModel.create(user)
  }

  async delete(ids: string[]): Promise<DeleteResult> {
    return await this.userModel.deleteMany({ _id: { $in: ids } })
  }

  async update(id: string, data: UserInput): Promise<User> {
    return await this.userModel.updateOne({ _id: id }, data)
  }
}
