import DefaultRequest from './request/default'
import AngelRequest from './request/angel'
import DefaultResponse from './response/default'
import AngelResponse from './response/angel'
import BFFResponse from './response/bff'

export const requestInterceptor = {
  default: DefaultRequest,
  angel: AngelRequest
}

export const responseInterceptor = {
  default: DefaultResponse,
  angel: AngelResponse,
  bff: BFFResponse
}

export default {
  request: requestInterceptor,
  response: responseInterceptor
}
