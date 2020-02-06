import { Document } from 'mongoose';
import { History } from 'src/graphql.schema';

export interface HistoryModel extends Document, History {}
