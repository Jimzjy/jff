import * as mongoose from 'mongoose'

export const HistorySchema = new mongoose.Schema({
  username: String,
  userID: String,
  command: String,
  device: String,
  deviceID: String,
  time: Number,
})
