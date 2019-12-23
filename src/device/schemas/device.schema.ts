import * as mongoose from 'mongoose'

export const LinkSchema = new mongoose.Schema({
  from: String,
  to: String,
  toID: String,
})
export const DeviceSchema = new mongoose.Schema({
  name: String,
  commands: [String],
  links: [LinkSchema],
})
