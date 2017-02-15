class WordMaster{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    pastForm(verbWord){
        if(verbWord.endsWith('y')){
            return verbWord.replace('y','ied');
        }
        return verbWord+'ed';
    }
    presentForm(verbWord){
        return verbWord+'ing';
    }
}



module.exports = WordMaster;
