import { MyServer } from './MyServer'
import { MyLogAspect } from './MyLogAspect'

/**
 * Does the test code have to be in the same file with MyAspect.ts?
 * 
 * this is not good.
 */
MyServer.connect()
const myServer = new MyServer()
myServer.sayHi()