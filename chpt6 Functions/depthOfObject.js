function depthOf(object){
    let level = 0;
    for(let key in object) {
        if (!object.hasOwnProperty(key)) return 0;

        if(typeof object[key] === 'object'){
            let depth = depthOf(object[key]) + 1;
            level = Math.max(depth, level);
        }else{
            level++;
        }
    }
    return level;
};

const obj = {a:{a:1} };
//obj.b = obj;

console.log(depthOf(obj))