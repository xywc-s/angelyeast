export type ProductListParams = {
  /** 物料code、name, 模糊匹配 */
  material: string
  /** 归属事业部code */
  businessUnit: string
  /** 包装物料号 */
  bzwlh: string
  /** 产品类型code */
  productType: string
  /** 执行标准编号,模糊匹配 */
  standardCode: string
  /** 条形码, 模糊匹配(middleDataJson.barcode) */
  barcode: string
  /** 目的国(middleDataJson.languageAttachments[?].region) */
  region: string
  /** 属性名称, 模糊匹配(dataJson.zssxmc) */
  zssxmc: string
  /** 认证说明, 模糊匹配(dataJson.rzsm) */
  rzsm: string
  /** 净含量 */
  lhl: string
  /** 配料 */
  pl: string
}
