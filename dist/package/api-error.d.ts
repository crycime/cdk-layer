declare class APIError extends Error {
    statusCode: number | undefined;
    isOperational: boolean;
    constructor(message?: string, statusCode?: number);
}
export { APIError };
