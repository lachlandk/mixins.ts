export declare type constructor<T = {}> = new (...args: any[]) => T;
export declare type mixin = (superclass: constructor) => constructor;
export declare const mix: (superclass: constructor) => {
    superclass: constructor;
    with(...mixins: (mixin | ((superclass: unknown) => unknown))[]): constructor;
};
