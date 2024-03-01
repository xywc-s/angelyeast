/** 企业微信Oauth鉴权 */
export const workWechatAuth = (
  /** 企业微信应用id */
  appid: string,
  /** 完成鉴权后的回调地址 */
  redirectUrl: string,
  /** 需要在回调时带回来的状态数据 */
  state: string
) => {
  location.replace(
    `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&state=${state}#wechat_redirect`
  )
}

/** 中台鉴权 */
export const middleAuth = (
  /** 中台鉴权地址 */
  authUrl: string,
  /** 完成鉴权后的回调地址 */
  redirectUrl: string,
  /** 需要在回调时带回来的状态数据 */
  state: string
) => {
  location.replace(`${authUrl}?redirect=${redirectUrl}?state=${state}`)
}
