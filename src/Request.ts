import { AxiosRequestConfig, ResponseType } from 'axios'
const F = require('lodash')
const axios = require('axios')

export interface ServiceClientPayload {
  url: string
  payload?: any
  headers?: any
  responseType?: ResponseType
}

export class RequestDto {
  private static async request(httpConfig: AxiosRequestConfig): Promise<any> {
    try {
      const result = await axios(httpConfig)
      return F.includes(
        ['stream', 'arraybuffer'],
        F.get(httpConfig, 'responseType'),
      )
        ? result
        : result.data
    } catch (e: any) {
      const errorCode = F.get(e, 'response.status', 500)
      switch (errorCode) {
        case 404:
          throw new Error(e)
        case 502:
          throw new Error(e)
        default:
          throw new Error(e)
      }
    }
  }

  static get(data: ServiceClientPayload): Promise<any> {
    return this.request({
      method: 'get',
      headers: data.headers,
      url: data.url,
      params: data.payload,
      responseType: data.responseType,
    })
  }

  static post(data: ServiceClientPayload): Promise<any> {
    return this.request({
      method: 'post',
      headers: data.headers,
      url: data.url,
      data: data.payload,
    })
  }

  static put(data: ServiceClientPayload): Promise<any> {
    return this.request({
      method: 'put',
      headers: data.headers,
      url: data.url,
      data: data.payload,
    })
  }

  static delete(data: ServiceClientPayload): Promise<any> {
    return this.request({
      method: 'delete',
      headers: data.headers,
      url: data.url,
      data: data.payload,
    })
  }
}
