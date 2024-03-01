export declare type Lazy = (...args: any) => Promise<any>
export declare type LazyReturnType<T extends Lazy> = T extends (...args: any) => Promise<infer R>
  ? R
  : Promise<any>
