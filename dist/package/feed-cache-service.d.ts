import { ObjectId } from 'mongoose';
import { BoxModel } from './models/mystery-box/box';
import mongoose from 'mongoose';
interface PushToFeedInput {
    boxId: ObjectId;
    brandCreator: ObjectId;
    tags?: string[];
    zones?: string[];
}
export declare class FeedCacheService {
    private box;
    constructor();
    pushToBrandFeed(input: PushToFeedInput): Promise<void>;
    removeFromBrandFeed(input: PushToFeedInput): Promise<import("mongodb").UpdateResult>;
    getBrandFeed(input: {
        creator: string;
        tag: string;
        zone: string;
        page: number;
        pageSize: number;
    }): Promise<mongoose.LeanDocument<import("./models/utils/box-feed").BoxFeedModel & {
        _id: mongoose.Types.ObjectId;
    }>[]>;
    getTopBoxesAsBrand(creator: string, page: number, pageSize: number): Promise<(BoxModel & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    getBox(boxId: string): Promise<(BoxModel & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    connect(url: string): Promise<void>;
}
export declare class S3Example {
    readonly region: string;
    constructor(region: string);
    getAllBucketNames(): Promise<string[]>;
}
export {};
