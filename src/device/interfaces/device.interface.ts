import { DeviceInput } from 'src/graphql.schema';
import { Document } from 'mongoose';

export interface DeviceModel extends DeviceInput, Document {}
