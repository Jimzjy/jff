import * as mongoose from 'mongoose'

export const DeviceSchema = new mongoose.Schema({
  id: String,
  name: String,
})
