"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxFeed = void 0;
const mongoose_1 = require("mongoose");
const mongoose = __importStar(require("mongoose"));
const BoxFeedSchema = new mongoose_1.Schema({
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
});
BoxFeedSchema.index({ brandCreator: 1, tags: 1, zones: 1, show: 1 });
BoxFeedSchema.index({ brandCreator: 1, zones: 1, show: 1 });
BoxFeedSchema.index({ brandCreator: 1, boxId: 1 }, { unique: true });
exports.BoxFeed = (0, mongoose_1.model)('BoxFeed', BoxFeedSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LWZlZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWxzL3V0aWxzL2JveC1mZWVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTREO0FBQzVELG1EQUFvQztBQVdwQyxNQUFNLGFBQWEsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDL0IsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDcEMsR0FBRyxFQUFFLGNBQWM7UUFDbkIsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQ3BDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDZCxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDZixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDdEMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtDQUM3QyxDQUFDLENBQUE7QUFFRixhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDcEUsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUMzRCxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUV2RCxRQUFBLE9BQU8sR0FBRyxJQUFBLGdCQUFLLEVBQWUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnQsIFNjaGVtYSwgbW9kZWwsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29vc2UnXG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuZXhwb3J0IGludGVyZmFjZSBCb3hGZWVkTW9kZWwgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGJyYW5kQ3JlYXRvcjogT2JqZWN0SWRcbiAgYm94SWQ6IE9iamVjdElkXG4gIHRhZ3M6IHN0cmluZ1tdIC8vIGJveCB0YWdzXG4gIHpvbmVzOiBzdHJpbmdbXVxuICBzaG93OiBib29sZWFuIC8vIGlmIGRlbGV0ZSB0aGVuIHNob3cgPSBmYWxzZVxuICBjcmVhdGVkT24/OiBudW1iZXJcbn1cblxuY29uc3QgQm94RmVlZFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBicmFuZENyZWF0b3I6IHtcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiAnRXZlbnRDcmVhdG9yJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgYm94SWQ6IHtcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiAnTXlzdGVyeUJveCcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHRhZ3M6IFtTdHJpbmddLFxuICB6b25lczogW1N0cmluZ10sXG4gIHNob3c6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICBjcmVhdGVkT246IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcbn0pXG5cbkJveEZlZWRTY2hlbWEuaW5kZXgoeyBicmFuZENyZWF0b3I6IDEsIHRhZ3M6IDEsIHpvbmVzOiAxLCBzaG93OiAxIH0pXG5Cb3hGZWVkU2NoZW1hLmluZGV4KHsgYnJhbmRDcmVhdG9yOiAxLCB6b25lczogMSwgc2hvdzogMSB9KVxuQm94RmVlZFNjaGVtYS5pbmRleCh7IGJyYW5kQ3JlYXRvcjogMSwgYm94SWQ6IDEgfSwgeyB1bmlxdWU6IHRydWUgfSlcblxuZXhwb3J0IGNvbnN0IEJveEZlZWQgPSBtb2RlbDxCb3hGZWVkTW9kZWw+KCdCb3hGZWVkJywgQm94RmVlZFNjaGVtYSlcbiJdfQ==