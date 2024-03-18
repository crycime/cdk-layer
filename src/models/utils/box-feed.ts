import { Document, Schema, model, ObjectId } from 'mongoose'
import * as mongoose from 'mongoose'

export interface BoxFeedModel extends Document {
  brandCreator: ObjectId
  boxId: ObjectId
  tags: string[] // box tags
  zones: string[]
  show: boolean // if delete then show = false
  createdOn?: number
}

const BoxFeedSchema = new Schema({
  brandCreator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EventCreator',
    required: true,
  },
  boxId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MysteryBox',
    required: true,
  },
  tags: [String],
  zones: [String],
  show: { type: Boolean, default: true },
  createdOn: { type: Date, default: Date.now },
})

BoxFeedSchema.index({ brandCreator: 1, tags: 1, zones: 1, show: 1 })
BoxFeedSchema.index({ brandCreator: 1, zones: 1, show: 1 })
BoxFeedSchema.index({ brandCreator: 1, boxId: 1 }, { unique: true })

export const BoxFeed = model<BoxFeedModel>('BoxFeed', BoxFeedSchema)
