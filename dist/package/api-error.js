"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = void 0;
class APIError extends Error {
    constructor(message = '', statusCode = 400) {
        super();
        this.message = message;
        this.isOperational = true;
        if (statusCode) {
            this.statusCode = statusCode;
        }
    }
}
exports.APIError = APIError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLFFBQVMsU0FBUSxLQUFLO0lBSzFCLFlBQVksT0FBTyxHQUFHLEVBQUUsRUFBRSxVQUFVLEdBQUcsR0FBRztRQUN4QyxLQUFLLEVBQUUsQ0FBQTtRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFBO1FBQ3pCLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7U0FDN0I7SUFDSCxDQUFDO0NBQ0Y7QUFFUSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFQSUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBzdGF0dXNDb2RlOiBudW1iZXIgfCB1bmRlZmluZWRcblxuICBpc09wZXJhdGlvbmFsOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IobWVzc2FnZSA9ICcnLCBzdGF0dXNDb2RlID0gNDAwKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICB0aGlzLmlzT3BlcmF0aW9uYWwgPSB0cnVlXG4gICAgaWYgKHN0YXR1c0NvZGUpIHtcbiAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGVcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgQVBJRXJyb3IgfVxuIl19