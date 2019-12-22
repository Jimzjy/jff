import { UserInput } from 'src/graphql.schema';
import { Document } from 'mongoose';

export interface UserModel extends UserInput, Document {}
