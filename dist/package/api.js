"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const Request_1 = require("./Request");
class Api {
    static async searchGetUserID() {
        const response = await Request_1.RequestDto.get({
            url: 'https://udex.keylesswallet.io/backend/pair/token/price?tokenA=0xff4d283ed0ac50f3db26c7b22e183e8ba2f8f770&tokenB=0x47753714a464f2cb4948cca4d72a274fd22d2c4e&chainId=97',
        });
        return response?.data;
    }
}
exports.Api = Api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBc0M7QUFFdEMsTUFBYSxHQUFHO0lBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlO1FBQzFCLE1BQU0sUUFBUSxHQUFHLE1BQU0sb0JBQVUsQ0FBQyxHQUFHLENBQUM7WUFDcEMsR0FBRyxFQUFFLHVLQUF1SztTQUM3SyxDQUFDLENBQUE7UUFDRixPQUFPLFFBQVEsRUFBRSxJQUFJLENBQUE7SUFDdkIsQ0FBQztDQUNGO0FBUEQsa0JBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0RHRvIH0gZnJvbSAnLi9SZXF1ZXN0J1xuXG5leHBvcnQgY2xhc3MgQXBpIHtcbiAgc3RhdGljIGFzeW5jIHNlYXJjaEdldFVzZXJJRCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUmVxdWVzdER0by5nZXQoe1xuICAgICAgdXJsOiAnaHR0cHM6Ly91ZGV4LmtleWxlc3N3YWxsZXQuaW8vYmFja2VuZC9wYWlyL3Rva2VuL3ByaWNlP3Rva2VuQT0weGZmNGQyODNlZDBhYzUwZjNkYjI2YzdiMjJlMTgzZThiYTJmOGY3NzAmdG9rZW5CPTB4NDc3NTM3MTRhNDY0ZjJjYjQ5NDhjY2E0ZDcyYTI3NGZkMjJkMmM0ZSZjaGFpbklkPTk3JyxcbiAgICB9KVxuICAgIHJldHVybiByZXNwb25zZT8uZGF0YVxuICB9XG59XG4iXX0=