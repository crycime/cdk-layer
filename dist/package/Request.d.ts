import { ResponseType } from 'axios';
export interface ServiceClientPayload {
    url: string;
    payload?: any;
    headers?: any;
    responseType?: ResponseType;
}
export declare class RequestDto {
    private static request;
    static get(data: ServiceClientPayload): Promise<any>;
    static post(data: ServiceClientPayload): Promise<any>;
    static put(data: ServiceClientPayload): Promise<any>;
    static delete(data: ServiceClientPayload): Promise<any>;
}
