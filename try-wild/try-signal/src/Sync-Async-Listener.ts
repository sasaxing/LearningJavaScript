import {Signal} from 'micro-signals';
 
const signal = new Signal<string>();
 
const asyncListener = (payload: string) => {
    console.log('Async listener starts... ');

    setTimeout(() => {
        console.log('Async - ', payload);
    }, 3000);

    console.log('Async listener ends... ');
};
signal.add(asyncListener);

const syncListener = (payload: string) => {
    console.log('sync listener starts... ');

    console.log('sync - ', payload);

    console.log('sync listener ends... ');
};
signal.add(syncListener);
 
signal.dispatch('a');