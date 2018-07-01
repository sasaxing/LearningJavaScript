const timeout1 = setTimeout(() => {
    console.log('3s passed!');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout1);
    console.log('I will clear timeout so that timeout1 will be interrupted and cb will not be called');
}, 2000);