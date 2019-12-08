import * as mongoose from 'mongoose'

export const LinkSchema = new mongoose.Schema({
  to: String,
})
export const DeviceSchema = new mongoose.Schema({
  name: String,
  commands: [String],
  links: [LinkSchema],
})
