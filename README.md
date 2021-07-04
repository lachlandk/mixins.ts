# ts-mixins
A small library created to offer syntactic sugar for [mixin](https://en.wikipedia.org/wiki/Mixin) patterns in Typescript.
Based off examples from [This blog post](https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/).
```shell
npm install @lachlandk/mixins
```

## Usage
Mixins should be defined like so:
```typescript
function MyMixin(superclass) {
    return class MyMixin extends superclass {
        constructor() {
            super();
        }
    }
}
```
They can be applied to a subclass as follows:

```typescript
const mixins = require("@lachlandk/mixins");

class SuperClass {
    constructor() {
    }
}

class SubClass extends mixins.mix(SuperClass).with(MyMixin) {
    constructor() {
        super();
    }
}

// Multiple mixins can be applied
class SubClass2 extends mixins.mix(SuperClass).with(MyMixin, MyMixin2) {
    constructor() {
        super();
    }
}
```
The mixins will be applied in an order such that the prototype tree starts with the superclass and works to the right.
In the example above, SubClass2 would subclass MyMixin2, which subclasses MyMixin, which subclasses SuperClass.

### Importing the Library
The library can be used as a Node.js (CommonJS) module or as an ES6 module.
```typescript
// CommonJS
const mixins = require("@lachlandk/mixins");
```
```typescript
// ES6
import mixins from "@lachlandk/mixins";
```
