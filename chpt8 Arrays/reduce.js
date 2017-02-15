const words = ["Beachball", "Rodeo", "Angel",
"Aardvark", "Xylophone", "November", "Chocolate",
"Papaya", "Uniform", "Joker", "Clover", "Bali"];

console.log(words);
const longWords = words.reduce((a, w) => w.length>6 ? a+" "+w : a, "").trim();
console.log(longWords);
// longWords: "Beachball Aardvark Xylophone November Chocolate Uniform"
// trim() to delete the first and last white spaces.

const longWords1 = words.filter(x => x.length>6).join(" ");
console.log(longWords1);
// longWords1: "Beachball Aardvark Xylophone November Chocolate Uniform"
