let lastMessage = Date.now();

console.log('\n==> Print #ms from 1970/1/1/00/00/00: ');
console.log(Date.now());

console.log('\n==> sinceLastMessage:');
setTimeout(function () {
  const now = Date.now();
  const sinceLastMessage = now - (lastMessage || now);
  console.log(sinceLastMessage);  //2021 or so.
}, 2000);
