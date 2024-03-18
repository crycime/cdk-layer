"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authHappinServer = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const api_error_1 = require("./api-error");
// allow Happin connect to SaaS server.
const authHappinServer = (jwtSecret) => async (req, _res, next) => {
    let token = req.get('authorization');
    if (!token) {
        return next(new api_error_1.APIError('authHappinServer Token not provided', 401));
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    jsonwebtoken_1.default.verify(token, jwtSecret, async (err, decoded) => {
        if (err) {
            return next(new api_error_1.APIError('authHappinServer Invalid Token', 401));
        }
        if (!decoded.happinUID) {
            return next(new api_error_1.APIError('authHappinServer Token missing happinUID', 401));
        }
        // change from Root to eventCreator
        // const rootUser = await RootUser.findOne({ _id: decoded.rootUserID });
        // if (!rootUser) {
        //   next(new APIError('authHappinServer Root user not found in DB', 401));
        // }
        // req.rootUserID = decoded.rootUserID;
        req.happinUID = decoded.happinUID;
        return next();
    });
};
exports.authHappinServer = authHappinServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFwcGluLWF1dGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGFwcGluLWF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0VBQThCO0FBQzlCLDJDQUFzQztBQUV0Qyx1Q0FBdUM7QUFDdkMsTUFBTSxnQkFBZ0IsR0FDcEIsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBUSxFQUFFLElBQVMsRUFBRSxJQUFTLEVBQUUsRUFBRTtJQUM5RCxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQ3BDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLG9CQUFRLENBQUMscUNBQXFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtLQUN0RTtJQUNELElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUMvQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0tBQ3JDO0lBRUQsc0JBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBUSxFQUFFLE9BQVksRUFBRSxFQUFFO1FBQzVELElBQUksR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxvQkFBUSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDakU7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FDVCxJQUFJLG9CQUFRLENBQUMsMENBQTBDLEVBQUUsR0FBRyxDQUFDLENBQzlELENBQUE7U0FDRjtRQUNELG1DQUFtQztRQUNuQyx3RUFBd0U7UUFDeEUsbUJBQW1CO1FBQ25CLDJFQUEyRTtRQUMzRSxJQUFJO1FBQ0osdUNBQXVDO1FBQ3ZDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQTtRQUNqQyxPQUFPLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFFTSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi9hcGktZXJyb3InXG5cbi8vIGFsbG93IEhhcHBpbiBjb25uZWN0IHRvIFNhYVMgc2VydmVyLlxuY29uc3QgYXV0aEhhcHBpblNlcnZlciA9XG4gIChqd3RTZWNyZXQ6IHN0cmluZykgPT4gYXN5bmMgKHJlcTogYW55LCBfcmVzOiBhbnksIG5leHQ6IGFueSkgPT4ge1xuICAgIGxldCB0b2tlbiA9IHJlcS5nZXQoJ2F1dGhvcml6YXRpb24nKVxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiBuZXh0KG5ldyBBUElFcnJvcignYXV0aEhhcHBpblNlcnZlciBUb2tlbiBub3QgcHJvdmlkZWQnLCA0MDEpKVxuICAgIH1cbiAgICBpZiAodG9rZW4uc3RhcnRzV2l0aCgnQmVhcmVyICcpKSB7XG4gICAgICB0b2tlbiA9IHRva2VuLnNsaWNlKDcsIHRva2VuLmxlbmd0aClcbiAgICB9XG5cbiAgICBqd3QudmVyaWZ5KHRva2VuLCBqd3RTZWNyZXQsIGFzeW5jIChlcnI6IGFueSwgZGVjb2RlZDogYW55KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBuZXh0KG5ldyBBUElFcnJvcignYXV0aEhhcHBpblNlcnZlciBJbnZhbGlkIFRva2VuJywgNDAxKSlcbiAgICAgIH1cbiAgICAgIGlmICghZGVjb2RlZC5oYXBwaW5VSUQpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoXG4gICAgICAgICAgbmV3IEFQSUVycm9yKCdhdXRoSGFwcGluU2VydmVyIFRva2VuIG1pc3NpbmcgaGFwcGluVUlEJywgNDAxKSxcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgLy8gY2hhbmdlIGZyb20gUm9vdCB0byBldmVudENyZWF0b3JcbiAgICAgIC8vIGNvbnN0IHJvb3RVc2VyID0gYXdhaXQgUm9vdFVzZXIuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5yb290VXNlcklEIH0pO1xuICAgICAgLy8gaWYgKCFyb290VXNlcikge1xuICAgICAgLy8gICBuZXh0KG5ldyBBUElFcnJvcignYXV0aEhhcHBpblNlcnZlciBSb290IHVzZXIgbm90IGZvdW5kIGluIERCJywgNDAxKSk7XG4gICAgICAvLyB9XG4gICAgICAvLyByZXEucm9vdFVzZXJJRCA9IGRlY29kZWQucm9vdFVzZXJJRDtcbiAgICAgIHJlcS5oYXBwaW5VSUQgPSBkZWNvZGVkLmhhcHBpblVJRFxuICAgICAgcmV0dXJuIG5leHQoKVxuICAgIH0pXG4gIH1cblxuZXhwb3J0IHsgYXV0aEhhcHBpblNlcnZlciB9XG4iXX0=