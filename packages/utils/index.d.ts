export * from './types';
export * from './vue';
export declare const isString: (value: unknown) => value is string;
export declare const isNumber: (value: unknown) => value is number;
export declare const isObject: (value: unknown) => value is Record<string, unknown>;
export declare const isArray: (arg: any) => arg is any[];
export declare const isFunction: (value: unknown) => value is (...args: unknown[]) => unknown;
export declare const isBoolean: (value: unknown) => value is boolean;
