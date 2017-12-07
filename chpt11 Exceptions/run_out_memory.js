var depth = 0;

(function recurse() {
  // log at every 500 calls
  (++depth % 500) || console.log(depth);
  recurse();
})();

// need more stack size.
// $ node --stack_size=4096 run_out_memory.js