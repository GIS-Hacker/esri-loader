export interface ILoadScriptOptions {
    url?: string;
    css?: string;
    dojoConfig?: {
        [propName: string]: any;
    };
}
export declare const utils: {
    Promise: any;
};
export declare function getScript(): HTMLScriptElement;
export declare function isLoaded(): boolean;
export declare function loadScript(options?: ILoadScriptOptions): Promise<HTMLScriptElement>;
export declare function loadModules(modules: string[], loadScriptOptions?: ILoadScriptOptions): Promise<any[]>;
export { loadCss } from './utils/css';
declare const _default: {
    getScript: () => HTMLScriptElement;
    isLoaded: () => boolean;
    loadModules: (modules: string[], loadScriptOptions?: ILoadScriptOptions) => Promise<any[]>;
    loadScript: (options?: ILoadScriptOptions) => Promise<HTMLScriptElement>;
    loadCss: (url: any) => HTMLLinkElement;
    utils: {
        Promise: any;
    };
};
export default _default;
