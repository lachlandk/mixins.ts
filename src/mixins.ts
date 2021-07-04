export type constructor<T = {}> = new (...args: any[]) => T;
export type mixin = (superclass: constructor) => constructor

export const mix = (superclass: constructor) => new class {
    constructor(
        public superclass: constructor
    ) {}

    with(...mixins: (mixin|((superclass: unknown)=>unknown))[]): constructor {
        return (mixins as unknown as mixin[]).reduce((superclass, mixin) => mixin(superclass), this.superclass);
    }
}(superclass);
