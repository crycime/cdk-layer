"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestDto = void 0;
const F = require('lodash');
const axios = require('axios');
class RequestDto {
    static async request(httpConfig) {
        try {
            const result = await axios(httpConfig);
            return F.includes(['stream', 'arraybuffer'], F.get(httpConfig, 'responseType'))
                ? result
                : result.data;
        }
        catch (e) {
            const errorCode = F.get(e, 'response.status', 500);
            switch (errorCode) {
                case 404:
                    throw new Error(e);
                case 502:
                    throw new Error(e);
                default:
                    throw new Error(e);
            }
        }
    }
    static get(data) {
        return this.request({
            method: 'get',
            headers: data.headers,
            url: data.url,
            params: data.payload,
            responseType: data.responseType,
        });
    }
    static post(data) {
        return this.request({
            method: 'post',
            headers: data.headers,
            url: data.url,
            data: data.payload,
        });
    }
    static put(data) {
        return this.request({
            method: 'put',
            headers: data.headers,
            url: data.url,
            data: data.payload,
        });
    }
    static delete(data) {
        return this.request({
            method: 'delete',
            headers: data.headers,
            url: data.url,
            data: data.payload,
        });
    }
}
exports.RequestDto = RequestDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUMzQixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7QUFTOUIsTUFBYSxVQUFVO0lBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBOEI7UUFDekQsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FDZixDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsRUFDekIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQ2xDO2dCQUNDLENBQUMsQ0FBQyxNQUFNO2dCQUNSLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBO1NBQ2hCO1FBQUMsT0FBTyxDQUFNLEVBQUU7WUFDZixNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNsRCxRQUFRLFNBQVMsRUFBRTtnQkFDakIsS0FBSyxHQUFHO29CQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BCLEtBQUssR0FBRztvQkFDTixNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNwQjtvQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3BCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUEwQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ25CLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDbkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBMEI7UUFDdEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDbkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBM0RELGdDQTJEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zUmVxdWVzdENvbmZpZywgUmVzcG9uc2VUeXBlIH0gZnJvbSAnYXhpb3MnXG5jb25zdCBGID0gcmVxdWlyZSgnbG9kYXNoJylcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VDbGllbnRQYXlsb2FkIHtcbiAgdXJsOiBzdHJpbmdcbiAgcGF5bG9hZD86IGFueVxuICBoZWFkZXJzPzogYW55XG4gIHJlc3BvbnNlVHlwZT86IFJlc3BvbnNlVHlwZVxufVxuXG5leHBvcnQgY2xhc3MgUmVxdWVzdER0byB7XG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHJlcXVlc3QoaHR0cENvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoaHR0cENvbmZpZylcbiAgICAgIHJldHVybiBGLmluY2x1ZGVzKFxuICAgICAgICBbJ3N0cmVhbScsICdhcnJheWJ1ZmZlciddLFxuICAgICAgICBGLmdldChodHRwQ29uZmlnLCAncmVzcG9uc2VUeXBlJyksXG4gICAgICApXG4gICAgICAgID8gcmVzdWx0XG4gICAgICAgIDogcmVzdWx0LmRhdGFcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IEYuZ2V0KGUsICdyZXNwb25zZS5zdGF0dXMnLCA1MDApXG4gICAgICBzd2l0Y2ggKGVycm9yQ29kZSkge1xuICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSlcbiAgICAgICAgY2FzZSA1MDI6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldChkYXRhOiBTZXJ2aWNlQ2xpZW50UGF5bG9hZCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgaGVhZGVyczogZGF0YS5oZWFkZXJzLFxuICAgICAgdXJsOiBkYXRhLnVybCxcbiAgICAgIHBhcmFtczogZGF0YS5wYXlsb2FkLFxuICAgICAgcmVzcG9uc2VUeXBlOiBkYXRhLnJlc3BvbnNlVHlwZSxcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHBvc3QoZGF0YTogU2VydmljZUNsaWVudFBheWxvYWQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiBkYXRhLmhlYWRlcnMsXG4gICAgICB1cmw6IGRhdGEudXJsLFxuICAgICAgZGF0YTogZGF0YS5wYXlsb2FkLFxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgcHV0KGRhdGE6IFNlcnZpY2VDbGllbnRQYXlsb2FkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICBoZWFkZXJzOiBkYXRhLmhlYWRlcnMsXG4gICAgICB1cmw6IGRhdGEudXJsLFxuICAgICAgZGF0YTogZGF0YS5wYXlsb2FkLFxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZGVsZXRlKGRhdGE6IFNlcnZpY2VDbGllbnRQYXlsb2FkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICBoZWFkZXJzOiBkYXRhLmhlYWRlcnMsXG4gICAgICB1cmw6IGRhdGEudXJsLFxuICAgICAgZGF0YTogZGF0YS5wYXlsb2FkLFxuICAgIH0pXG4gIH1cbn1cbiJdfQ==