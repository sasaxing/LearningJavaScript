// a bunch of functions:
module.exports = {
    indexof(arr, item){
        for(let i=0; i<arr.length; i++){
            if(arr[i] === item) return i;
        }
        return -1;
    },
    sum(arr){
        let s = 0;
        for(let e of arr){
            s += e;
        }
        return s;
    },
    max(arr){
        let res = arr[0];
        for(let e of arr){
            if(e > res) res = e
        }
        return res;
    }
}
