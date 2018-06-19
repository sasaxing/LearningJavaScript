import {Signal} from 'micro-signals';
import * as assert from 'power-assert';
 
const signal = new Signal<string>();
 
const received: string[] = [];
 
const listener = (payload: string) => {
    received.push(payload);
};
signal.add(listener);
 
signal.dispatch('a');
signal.dispatch('b');

signal.remove(listener);
signal.dispatch('c');
 
assert.deepEqual(received, ['a', 'b']);