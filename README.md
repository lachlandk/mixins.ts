# ts-mixins
A small library created to offer syntactic sugar for [mixin](https://en.wikipedia.org/wiki/Mixin) patterns in Typescript.
Based off examples from [this blog post](https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/), with assistance from comments in [this GitHub issue](https://github.com/Microsoft/TypeScript/pull/13743#issuecomment-277607201).
```shell
npm install @lachlandk/mixins
```

## Usage
Mixins should be defined like so:
```typescript
import { Constructor } from "@lachlandk/mixins";

function MyMixin<T extends Constructor>(superclass: T) {
    return class MyMixin extends superclass {
        constructor(...args: any[]) {
            super(...args);
        }
    }
}
```
They can be applied to a subclass as follows:

```typescript
import { mix } from "@lachlandk/mixins";

class SuperClass {
    constructor() {
    }
}

class SubClass extends mix(SuperClass).with(MyMixin) {
    constructor() {
        super();
    }
}

// Multiple mixins can be applied with composition
class SubClass2 extends mix(mix(SuperClass).with(MyMixin)).with(MyMixin2) {
    constructor() {
        super();
    }
}
```
The mixins will be applied in an order such that the prototype tree starts with the superclass and works to the right.
In the example above, SubClass2 would subclass MyMixin2, which subclasses MyMixin, which subclasses SuperClass.
