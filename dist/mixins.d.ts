export declare type Constructor<T = {}> = new (...args: any[]) => T;
export declare const mix: <superType extends Constructor<{}>>(superclass: superType) => {
    superclass: superType;
    with<mixinType extends Constructor<{}>>(mixin: (superclass: superType) => mixinType & superType): mixinType & superType;
};
