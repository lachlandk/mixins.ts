const mixins = require("../dist/mixins");
const {suite, test} = require("mocha");
const assert = require("assert");

suite("Testing mix().with()", function() {
	class BaseClass {
		a;
		constructor() {
			this.a = "a";
		}
	}

	const Mixin1 = superclass => class extends superclass {
		b;
		constructor() {
			super();
			this.b = "b";
		}
	};

	const Mixin2 = superclass => class extends superclass {
		c;
		constructor() {
			super();
			this.c = "c";
		}
	};

	class SubClass extends mixins.mix(BaseClass).with(Mixin1, Mixin2) {
		constructor() {
			super();
		}
	}

	test("Mixins are applied in the correct order.", function() {
		assert.notStrictEqual(Object.getPrototypeOf(SubClass), Mixin2(Mixin1(BaseClass)));
		assert.notStrictEqual(Object.getPrototypeOf(Mixin2(Mixin1(BaseClass))), Mixin1(BaseClass))
		assert.strictEqual(Object.getPrototypeOf(Mixin1(BaseClass)), BaseClass)
	});

	test("Properties are inherited from all mixins and base class.", function() {
		const {a, b, c} = new SubClass();
		assert.strictEqual(a, "a");
		assert.strictEqual(b, "b");
		assert.strictEqual(c, "c");
	});
});
