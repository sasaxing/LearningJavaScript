import { Animal } from './Animal'

import { Wove } from 'aspect.js'
import { beforeMethod, Metadata, afterMethod } from 'aspect.js'

export class DogApsects {
    @beforeMethod({ classNamePattern: /^Dog/, methodNamePattern: /^speak/ })
    beforeSpeak(_meta: Metadata) {
        console.log('[Dog - before speak]')
    }

    @beforeMethod({ classNamePattern: /^Dog/, methodNamePattern: /^eat/ })
    beforeEat(_meta: Metadata) {
        console.log('[Dog - before eat]')
    }

    @beforeMethod({ classNamePattern: /^Dog/, methodNamePattern: /^bark/ })
    beforeBark(_meta: Metadata) {
        console.log('[Dog - before bark]')
    }

    @afterMethod({ classNamePattern: /^Dog/, methodNamePattern: /^protect/ })
    async afterProtect(meta: Metadata) { // look aspect.js-repo/aop.js/test/advices/async_advices.spec.ts
        await meta.method.result
        console.log('[Dog - after protect]')
    }
}

@Wove()
export class Dog extends Animal {
    speak(): void {
        console.log('Dog - speak')
    }

    bark(): void {
        console.log('Dog - bark')
    }

    eat(): void {
        super.eat()
    }

    protectMaster(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            setTimeout(function () {
                console.log('Dog - protect you')
                resolve()
            }, 1000);
        })
    }
}