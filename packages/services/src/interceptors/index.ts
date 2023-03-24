import DefaultRequest from './request/default'
import DefaultResponse from './response/default'
import AngelResponse from './response/angel'
import BFFResponse from './response/bff'

export const reqInterceptor = {
  default: DefaultRequest
}

export const resInterceptor = {
  default: DefaultResponse,
  angel: AngelResponse,
  bff: BFFResponse
}
