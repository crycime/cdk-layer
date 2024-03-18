declare const authHappinServer: (jwtSecret: string) => (req: any, _res: any, next: any) => Promise<any>;
export { authHappinServer };
