"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const micro_signals_1 = require("micro-signals");
const assert = require("power-assert");
const signal = new micro_signals_1.Signal();
const received = [];
const listener = (payload) => {
    received.push(payload);
};
signal.add(listener);
signal.dispatch('a');
signal.dispatch('b');
signal.remove(listener);
signal.dispatch('c');
assert.deepEqual(received, ['a', 'b']);
//# sourceMappingURL=BasicUsage.js.map