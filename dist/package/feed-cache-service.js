"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Example = exports.FeedCacheService = void 0;
const box_feed_1 = require("./models/utils/box-feed");
const box_1 = __importDefault(require("./models/mystery-box/box"));
const mongoose_1 = __importDefault(require("mongoose"));
class FeedCacheService {
    constructor() {
        this.box = box_1.default;
    }
    async pushToBrandFeed(input) {
        const feed = await box_feed_1.BoxFeed.findOneAndUpdate({
            brandCreator: input.brandCreator,
            boxId: input.boxId,
        }, {
            brandCreator: input.brandCreator,
            boxId: input.boxId,
            tags: input.tags,
            zones: input.zones,
            show: true,
        }, {
            upsert: true,
            new: true,
        });
        console.log('feed', feed);
    }
    async removeFromBrandFeed(input) {
        return box_feed_1.BoxFeed.updateMany({
            boxId: input.boxId,
            brandCreator: input.brandCreator,
        }, { show: false });
    }
    async getBrandFeed(input) {
        return box_feed_1.BoxFeed.find({
            brandCreator: input.creator,
            ...(input.tag && { tags: input.tag }),
            zones: input.zone,
            show: true,
        })
            .sort({ createdOn: -1 })
            .skip(input.page * input.pageSize)
            .limit(input.pageSize)
            .lean();
    }
    async getTopBoxesAsBrand(creator, page, pageSize) {
        const feed = await box_feed_1.BoxFeed.find({ brandCreator: creator, show: true })
            .sort({ createdOn: -1 })
            .skip(page * pageSize)
            .limit(pageSize)
            .lean();
        return this.box
            .find({ _id: { $in: feed.map((f) => f.boxId) } })
            .select('name price image');
    }
    async getBox(boxId) {
        return this.box.find({ _id: boxId }).select('name price image');
    }
    async connect(url) {
        mongoose_1.default.set('strictQuery', false);
        await mongoose_1.default.connect(url, {
            autoIndex: false,
        });
    }
}
exports.FeedCacheService = FeedCacheService;
class S3Example {
    constructor(region) {
        this.region = region;
    }
    async getAllBucketNames() {
        return ['1', '2', '3', '4', '5'];
    }
}
exports.S3Example = S3Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZC1jYWNoZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZlZWQtY2FjaGUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxzREFBaUQ7QUFDakQsbUVBQXdEO0FBQ3hELHdEQUErQjtBQVMvQixNQUFhLGdCQUFnQjtJQUczQjtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBRyxDQUFBO0lBQ2hCLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQXNCO1FBQzFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FDekM7WUFDRSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ25CLEVBQ0Q7WUFDRSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsSUFBSSxFQUFFLElBQUk7U0FDWCxFQUNEO1lBQ0UsTUFBTSxFQUFFLElBQUk7WUFDWixHQUFHLEVBQUUsSUFBSTtTQUNWLENBQ0YsQ0FBQTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsS0FBc0I7UUFDOUMsT0FBTyxrQkFBTyxDQUFDLFVBQVUsQ0FDdkI7WUFDRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1NBQ2pDLEVBQ0QsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQ2hCLENBQUE7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQU1sQjtRQUNDLE9BQU8sa0JBQU8sQ0FBQyxJQUFJLENBQUM7WUFDbEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQzNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDakIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDO2FBQ0MsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNqQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNyQixJQUFJLEVBQUUsQ0FBQTtJQUNYLENBQUM7SUFFRCxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBZSxFQUFFLElBQVksRUFBRSxRQUFnQjtRQUN0RSxNQUFNLElBQUksR0FBRyxNQUFNLGtCQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDbkUsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7YUFDckIsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLElBQUksRUFBRSxDQUFBO1FBQ1QsT0FBTyxJQUFJLENBQUMsR0FBRzthQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ2hELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQWE7UUFDeEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQVc7UUFDdkIsa0JBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sa0JBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQzFCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQTlFRCw0Q0E4RUM7QUFFRCxNQUFhLFNBQVM7SUFDcEIsWUFBcUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXZDLEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0NBQ0Y7QUFORCw4QkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsLCBPYmplY3RJZCB9IGZyb20gJ21vbmdvb3NlJ1xuaW1wb3J0IHsgQm94RmVlZCB9IGZyb20gJy4vbW9kZWxzL3V0aWxzL2JveC1mZWVkJ1xuaW1wb3J0IEJveCwgeyBCb3hNb2RlbCB9IGZyb20gJy4vbW9kZWxzL215c3RlcnktYm94L2JveCdcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuaW50ZXJmYWNlIFB1c2hUb0ZlZWRJbnB1dCB7XG4gIGJveElkOiBPYmplY3RJZFxuICBicmFuZENyZWF0b3I6IE9iamVjdElkXG4gIHRhZ3M/OiBzdHJpbmdbXVxuICB6b25lcz86IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBjbGFzcyBGZWVkQ2FjaGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBib3g6IE1vZGVsPEJveE1vZGVsPlxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm94ID0gQm94XG4gIH1cblxuICBhc3luYyBwdXNoVG9CcmFuZEZlZWQoaW5wdXQ6IFB1c2hUb0ZlZWRJbnB1dCkge1xuICAgIGNvbnN0IGZlZWQgPSBhd2FpdCBCb3hGZWVkLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICB7XG4gICAgICAgIGJyYW5kQ3JlYXRvcjogaW5wdXQuYnJhbmRDcmVhdG9yLFxuICAgICAgICBib3hJZDogaW5wdXQuYm94SWQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmFuZENyZWF0b3I6IGlucHV0LmJyYW5kQ3JlYXRvcixcbiAgICAgICAgYm94SWQ6IGlucHV0LmJveElkLFxuICAgICAgICB0YWdzOiBpbnB1dC50YWdzLFxuICAgICAgICB6b25lczogaW5wdXQuem9uZXMsXG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1cHNlcnQ6IHRydWUsXG4gICAgICAgIG5ldzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgKVxuICAgIGNvbnNvbGUubG9nKCdmZWVkJywgZmVlZClcbiAgfVxuXG4gIGFzeW5jIHJlbW92ZUZyb21CcmFuZEZlZWQoaW5wdXQ6IFB1c2hUb0ZlZWRJbnB1dCkge1xuICAgIHJldHVybiBCb3hGZWVkLnVwZGF0ZU1hbnkoXG4gICAgICB7XG4gICAgICAgIGJveElkOiBpbnB1dC5ib3hJZCxcbiAgICAgICAgYnJhbmRDcmVhdG9yOiBpbnB1dC5icmFuZENyZWF0b3IsXG4gICAgICB9LFxuICAgICAgeyBzaG93OiBmYWxzZSB9LFxuICAgIClcbiAgfVxuXG4gIGFzeW5jIGdldEJyYW5kRmVlZChpbnB1dDoge1xuICAgIGNyZWF0b3I6IHN0cmluZ1xuICAgIHRhZzogc3RyaW5nXG4gICAgem9uZTogc3RyaW5nXG4gICAgcGFnZTogbnVtYmVyXG4gICAgcGFnZVNpemU6IG51bWJlclxuICB9KSB7XG4gICAgcmV0dXJuIEJveEZlZWQuZmluZCh7XG4gICAgICBicmFuZENyZWF0b3I6IGlucHV0LmNyZWF0b3IsXG4gICAgICAuLi4oaW5wdXQudGFnICYmIHsgdGFnczogaW5wdXQudGFnIH0pLFxuICAgICAgem9uZXM6IGlucHV0LnpvbmUsXG4gICAgICBzaG93OiB0cnVlLFxuICAgIH0pXG4gICAgICAuc29ydCh7IGNyZWF0ZWRPbjogLTEgfSlcbiAgICAgIC5za2lwKGlucHV0LnBhZ2UgKiBpbnB1dC5wYWdlU2l6ZSlcbiAgICAgIC5saW1pdChpbnB1dC5wYWdlU2l6ZSlcbiAgICAgIC5sZWFuKClcbiAgfVxuXG4gIGFzeW5jIGdldFRvcEJveGVzQXNCcmFuZChjcmVhdG9yOiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcikge1xuICAgIGNvbnN0IGZlZWQgPSBhd2FpdCBCb3hGZWVkLmZpbmQoeyBicmFuZENyZWF0b3I6IGNyZWF0b3IsIHNob3c6IHRydWUgfSlcbiAgICAgIC5zb3J0KHsgY3JlYXRlZE9uOiAtMSB9KVxuICAgICAgLnNraXAocGFnZSAqIHBhZ2VTaXplKVxuICAgICAgLmxpbWl0KHBhZ2VTaXplKVxuICAgICAgLmxlYW4oKVxuICAgIHJldHVybiB0aGlzLmJveFxuICAgICAgLmZpbmQoeyBfaWQ6IHsgJGluOiBmZWVkLm1hcCgoZikgPT4gZi5ib3hJZCkgfSB9KVxuICAgICAgLnNlbGVjdCgnbmFtZSBwcmljZSBpbWFnZScpXG4gIH1cblxuICBhc3luYyBnZXRCb3goYm94SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmJveC5maW5kKHsgX2lkOiBib3hJZCB9KS5zZWxlY3QoJ25hbWUgcHJpY2UgaW1hZ2UnKVxuICB9XG5cbiAgYXN5bmMgY29ubmVjdCh1cmw6IHN0cmluZykge1xuICAgIG1vbmdvb3NlLnNldCgnc3RyaWN0UXVlcnknLCBmYWxzZSlcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHVybCwge1xuICAgICAgYXV0b0luZGV4OiBmYWxzZSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTM0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSByZWdpb246IHN0cmluZykge31cblxuICBhc3luYyBnZXRBbGxCdWNrZXROYW1lcygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIFsnMScsICcyJywgJzMnLCAnNCcsICc1J11cbiAgfVxufVxuIl19