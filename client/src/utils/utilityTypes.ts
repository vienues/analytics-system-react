export type AsyncReturnType<T> = T extends Promise<infer U> ? U : T extends (...args: any[]) => Promise<infer V> ? V : T
