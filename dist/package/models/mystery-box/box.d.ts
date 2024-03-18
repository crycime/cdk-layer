/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types, LeanDocument } from 'mongoose';
export declare enum AccessType {
    all = "all",
    private = "private",
    unpublish = "unpublish"
}
export declare enum BoxRefundType {
    noRefund = "no-refund",
    allowRefund = "allow-refund"
}
export declare enum BoxType {
    regular = "regular",
    bundleLook = "bundle-look",
    mysteryBox = "mystery-box",
    series = "series"
}
export interface BoxModel extends Document {
    creator: Types.ObjectId;
    name: string;
    seoTitle?: string;
    description: string;
    price: number;
    unboxItemsQuantity: number;
    image: string;
    gallery: string[];
    video: string;
    createDate: Date;
    accessType: AccessType;
    deleted: boolean;
    boxType: BoxType;
    currency: string;
    tags: string[];
    tax: number;
    maxProductValueWithShipping: number;
}
export declare type IBoxModel = LeanDocument<BoxModel>;
declare const _default: import("mongoose").Model<BoxModel, {}, {}, {}, any>;
export default _default;
