import type { App, Plugin } from 'vue';
import { type SFCWithInstall } from '../types';
export declare const withInstall: <T>(component: T, alias?: string) => SFCWithInstall<T>;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCWithInstall<T>;
export declare const withNoopInstall: <T>(component: T) => SFCWithInstall<T>;
export declare const makeInstaller: (components?: Plugin[]) => {
    install: (app: App) => void;
};
