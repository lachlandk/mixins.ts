export const mix = (superclass) => new class {
    constructor(superclass) {
        this.superclass = superclass;
    }
    // multiple mixin support with recursive function if reduce() doesnt work?
    with(mixin) {
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
