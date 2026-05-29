export * from './types'
export * from './vue'

export const isString = (value: unknown): value is string => typeof value === 'string'

export const isNumber = (value: unknown): value is number => typeof value === 'number'

export const isObject = (value: unknown): value is Record<string, unknown> =>
  Object.prototype.toString.call(value) === '[object Object]'

export const isArray = Array.isArray

export const isFunction = (value: unknown): value is (...args: unknown[]) => unknown => typeof value === 'function'

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'
