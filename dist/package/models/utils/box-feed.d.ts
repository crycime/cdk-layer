import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
export interface BoxFeedModel extends Document {
    brandCreator: ObjectId;
    boxId: ObjectId;
    tags: string[];
    zones: string[];
    show: boolean;
    createdOn?: number;
}
export declare const BoxFeed: mongoose.Model<BoxFeedModel, {}, {}, {}, any>;
