/* eslint max-len: 0 */
import { Document, Schema, model, Types, LeanDocument } from 'mongoose'

export enum AccessType {
  all = 'all', // will be shown separatly at box section of event page. or at its own store, or platform
  private = 'private', // private listing
  unpublish = 'unpublish',
}

export enum BoxRefundType {
  noRefund = 'no-refund',
  allowRefund = 'allow-refund',
}

// leave it for future template maybe
export enum BoxType {
  regular = 'regular',
  bundleLook = 'bundle-look',
  mysteryBox = 'mystery-box',
  series = 'series',
}

// LOCK: quantity
export interface BoxModel extends Document {
  creator: Types.ObjectId
  name: string
  seoTitle?: string
  description: string
  price: number
  unboxItemsQuantity: number // save the unbox relations qty here.
  // quantity: number; // decided by how many combos dynamically
  image: string
  gallery: string[]
  video: string
  // tell ceator, they can create only one shipping cost per box, even something is more expensive or free to ship.
  // because we do not know what is in the box. we could say the shipping fee will be refund if the box commodity is free to ship.
  // shippingCost: ShippingCost[];   -->>>> ShippingProfile

  // TODO in the future, we should save shipping address in user, so they dont need to refill.
  // mail: boolean; // use commodity mail
  createDate: Date
  accessType: AccessType // to show on box website or only for ticketing bundle.
  deleted: boolean // delete from dashboard
  boxType: BoxType // built for different categories. predefined. maybe cloths. or .... for now nothing. or maybe setup purpose, like what you want
  // to do with boxes. do not mix too different stuff.
  currency: string // box currency will use store currency
  // for platform to search
  tags: string[]
  // for platform to show box
  // boxShowType: BoxShowType;
  // tax manual
  tax: number // 0.13 ex
  maxProductValueWithShipping: number
}

export type IBoxModel = LeanDocument<BoxModel>

const BoxSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'EventCreator' }, // event creator will be saas admin for box and events.
  name: { type: String, default: '' },
  seoTitle: { type: String },
  description: { type: String, default: '' },
  price: { type: Number }, // should calculate from commodities in box, their shipping fee vary. from shipping zones.
  unboxItemsQuantity: { type: Number },
  // quantity: { type: Number, default: 0 },
  image: { type: String },
  gallery: [{ type: String }],
  video: { type: String },
  // mail: { type: Boolean, default: true }, // mail or pick up to buyers address

  createDate: { type: Date, default: Date.now },
  accessType: {
    type: String,
    enum: Object.values(AccessType),
    default: AccessType.unpublish,
  },
  deleted: { type: Boolean, default: false },
  boxType: {
    type: String,
    enum: Object.values(BoxType),
    default: BoxType.regular,
  },
  currency: { type: String, default: 'USD' },
  tags: [{ type: String }], // maximum 3 tags. from tagging.
  tax: { type: Number, default: 0 },
  maxProductValueWithShipping: { type: Number, default: 0 },
})

BoxSchema.index({ creator: 1 })
BoxSchema.index({ tags: 1 })

// const Box = model<BoxModel>('MysteryBox', BoxSchema);

// export { Box, BoxSchema };
export default model<BoxModel>('MysteryBox', BoxSchema)
