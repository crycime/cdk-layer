import { RequestDto } from './Request'

export class Api {
  static async searchGetUserID(): Promise<any> {
    const response = await RequestDto.get({
      url: 'https://udex.keylesswallet.io/backend/pair/token/price?tokenA=0xff4d283ed0ac50f3db26c7b22e183e8ba2f8f770&tokenB=0x47753714a464f2cb4948cca4d72a274fd22d2c4e&chainId=97',
    })
    return response?.data
  }
}
