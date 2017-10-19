import { beforeMethod, Metadata, afterMethod } from 'aspect.js'
import { Dog } from './Dog'
import { Person } from './Person'
import { Builder } from './Builder'

const myDog = new Dog('Qiuqiu')
myDog.speak()
myDog.eat()
myDog.bark()
myDog.protectMaster()


const p = new Person('xxs')
p.keepAPet('duoduo')
p.travel('China')
/*
export class BuilderApsects {
    @afterMethod({ classNamePattern: /^Builder/, methodNamePattern: /^createADog/ })
    // 
    aftercreateADog(_meta: Metadata) {
        console.log('[after createADog]: it spoke.')
    }
}
const aBuilder = new Builder()
aBuilder.createADog()
// this trigger a Dog.speak() but it won't trigger the Dog-before-speak advice
// because Dog.speak() is invoked in another file.
*/