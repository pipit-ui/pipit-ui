import type { Plugin } from 'vue';
export declare const INSTALLED_KEY: unique symbol;
export type SFCWithInstall<T> = T & Plugin;
