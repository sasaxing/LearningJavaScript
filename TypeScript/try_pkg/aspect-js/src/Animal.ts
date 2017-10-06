/*
import { Wove } from 'aspect.js'
import { beforeMethod, Metadata, afterMethod } from 'aspect.js'

export class DogApsects {
    @beforeMethod({ classNamePattern: /^Animal/, methodNamePattern: /^eat/ })
    beforeEat(_meta: Metadata) {
        console.log('[Animal - before eat]')
    }

    @beforeMethod({ classNamePattern: /^Animal/, methodNamePattern: /^speak/ })
    beforeSpeak(_meta: Metadata) {
        console.log('[Animal - before speak]')
    }
}

@Wove()
*/
export abstract class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    abstract speak(): void

    eat() {
        console.log('Animal - eat')
    }
}