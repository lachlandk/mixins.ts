export type Constructor<T = {}> = new (...args: any[]) => T

export const mix = <superType extends Constructor>(superclass: superType) => new class {
    constructor(
        public superclass: superType
    ) {}

    // multiple mixin support with recursive function if reduce() doesnt work?
    with<mixinType extends Constructor>(mixin: (superclass: superType) => mixinType & superType) {
        return mixin(superclass);
    }
}(superclass);

// export function Mixin<objectType>(objDef: objectType) {
//     return <superType>(superclass: genericConstructor<superType>) => {
//         const returnClass: genericConstructor<objectType & superType> = class extends superclass implements superType {
//             constructor(...args: any[]) {
//                 super(...args);
//             }
//         }
//         Object.assign(returnClass.prototype, objDef);
//         return returnClass as genericConstructor<objectType & superType>;
//     }
// }
