import { Wove, Metadata, MethodMetadata, beforeMethod, afterMethod, beforeGetter, afterSetter, afterGetter, beforeStaticMethod, afterStaticMethod } from '../aspect.js/lib/index';
import { MyServer } from './MyServer';


export class MyLogAspect {
    @beforeStaticMethod({ classNamePattern: /^MyServer/, methodNamePattern: /^connect/ })
    beforeConnect(meta: Metadata) {
        console.log(`[before advice] Prepare to connect...`);
    }

    @afterStaticMethod({ classNamePattern: /^MyServer/, methodNamePattern: /^connect/ })
    afterConnect(meta: Metadata) {
        console.log(`[after advice] Post processes after connection closed...\n`);
    }

    @beforeMethod({ classNamePattern: /^MyServer/, methodNamePattern: /^sayHi/ })
    beforeSayHi(meta: Metadata) {
        console.log(`[before advice] Prepare to say hi...`);
    }

    @afterMethod({ classNamePattern: /^MyServer/, methodNamePattern: /^sayHi/ })
    afterSayHi(meta: Metadata) {
        console.log(`[after advice] Post processes after greeting...`);
    }
}

MyServer.connect()
const myServer = new MyServer()
myServer.sayHi()
/**
 * how to move these executions to a separate file instead of together with AspectClass?
 */