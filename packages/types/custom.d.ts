export declare type Lazy<T> = () => Promise<T>
export declare type LazyReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : Promise<any>
