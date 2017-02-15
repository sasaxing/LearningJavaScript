const re1 = /going/;
const re2 = new RegExp("going");
// they are equivalent. (but re1 != re2, objects are not comparable directly)

const users = ["mary", "nick", "arthur", "sam", "yvette"];
const text = "User @arthur started the backup and 15:15, " + "and @nick and @yvette restored it at 18:35.";
const userRegex = new RegExp(`@(?:${users.join('|')})\\b`, 'g');
m = text.match(userRegex); // [ "@arthur", "@nick", "@yvette" ]
console.log(m);

// it's feasible using RegExp literal, but not dynamically!
userRegex1 = /@(?:mary|nick|arthur|sam|yvette)\b/g ;
m1 = text.match(userRegex1);
console.log(m1);
