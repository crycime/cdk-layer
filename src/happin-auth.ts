import jwt from 'jsonwebtoken'
import { APIError } from './api-error'

// allow Happin connect to SaaS server.
const authHappinServer =
  (jwtSecret: string) => async (req: any, _res: any, next: any) => {
    let token = req.get('authorization')
    if (!token) {
      return next(new APIError('authHappinServer Token not provided', 401))
    }
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length)
    }

    jwt.verify(token, jwtSecret, async (err: any, decoded: any) => {
      if (err) {
        return next(new APIError('authHappinServer Invalid Token', 401))
      }
      if (!decoded.happinUID) {
        return next(
          new APIError('authHappinServer Token missing happinUID', 401),
        )
      }
      // change from Root to eventCreator
      // const rootUser = await RootUser.findOne({ _id: decoded.rootUserID });
      // if (!rootUser) {
      //   next(new APIError('authHappinServer Root user not found in DB', 401));
      // }
      // req.rootUserID = decoded.rootUserID;
      req.happinUID = decoded.happinUID
      return next()
    })
  }

export { authHappinServer }
