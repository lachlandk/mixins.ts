"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mix = void 0;
const mix = (superclass) => new class {
    constructor(superclass) {
        this.superclass = superclass;
    }
    with(...mixins) {
        return mixins.reduce((superclass, mixin) => mixin(superclass), this.superclass);
    }
}(superclass);
exports.mix = mix;
