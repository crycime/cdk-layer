import { Model, ObjectId } from 'mongoose'
import { BoxFeed } from './models/utils/box-feed'
import Box, { BoxModel } from './models/mystery-box/box'
import mongoose from 'mongoose'

interface PushToFeedInput {
  boxId: ObjectId
  brandCreator: ObjectId
  tags?: string[]
  zones?: string[]
}

export class FeedCacheService {
  private box: Model<BoxModel>

  constructor() {
    this.box = Box
  }

  async pushToBrandFeed(input: PushToFeedInput) {
    const feed = await BoxFeed.findOneAndUpdate(
      {
        brandCreator: input.brandCreator,
        boxId: input.boxId,
      },
      {
        brandCreator: input.brandCreator,
        boxId: input.boxId,
        tags: input.tags,
        zones: input.zones,
        show: true,
      },
      {
        upsert: true,
        new: true,
      },
    )
    console.log('feed', feed)
  }

  async removeFromBrandFeed(input: PushToFeedInput) {
    return BoxFeed.updateMany(
      {
        boxId: input.boxId,
        brandCreator: input.brandCreator,
      },
      { show: false },
    )
  }

  async getBrandFeed(input: {
    creator: string
    tag: string
    zone: string
    page: number
    pageSize: number
  }) {
    return BoxFeed.find({
      brandCreator: input.creator,
      ...(input.tag && { tags: input.tag }),
      zones: input.zone,
      show: true,
    })
      .sort({ createdOn: -1 })
      .skip(input.page * input.pageSize)
      .limit(input.pageSize)
      .lean()
  }

  async getTopBoxesAsBrand(creator: string, page: number, pageSize: number) {
    const feed = await BoxFeed.find({ brandCreator: creator, show: true })
      .sort({ createdOn: -1 })
      .skip(page * pageSize)
      .limit(pageSize)
      .lean()
    return this.box
      .find({ _id: { $in: feed.map((f) => f.boxId) } })
      .select('name price image')
  }

  async getBox(boxId: string) {
    return this.box.find({ _id: boxId }).select('name price image')
  }

  async connect(url: string) {
    mongoose.set('strictQuery', false)
    await mongoose.connect(url, {
      autoIndex: false,
    })
  }
}

export class S3Example {
  constructor(readonly region: string) {}

  async getAllBucketNames(): Promise<string[]> {
    return ['1', '2', '3', '4', '5']
  }
}
