aPasswd = 'jlY61s§82'
function validPassword(p) {
  return /[A-Z]/.test(p) &&
        /[0-9]/.test(p) &&
        /[a-z]/.test(p) &&
        !/[^a-zA-Z0-9]/.test(p);
}
console.log(validPassword(aPasswd));

function validPasswordLookahead(p) {
  return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}
console.log(validPasswordLookahead(aPasswd));
