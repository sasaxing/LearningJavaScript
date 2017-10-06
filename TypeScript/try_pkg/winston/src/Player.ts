import { Logging as log, BYOT_LOG_DEFAULT_PATH, BYOT_LOG_FILE_NAME } from './ByotLogger'
import * as winston from 'winston'
import { AnotherPlayer } from './AnotherPlayer'

export class Player {
    greetFromDefaultWinston() {
        //default winston's level can't be changed
        winston.log('info', 'hello')
    }

    greetFromMyWinston() {
        const myWinston = new winston.Logger({
            transports: [
                new winston.transports.Console(), // add a console transport
                new (winston.transports.File)({ filename: 'somefile.log' }) // add a file transport
            ]
        })
        myWinston.level = 'debug';
        myWinston.log('debug', 'Now my debug messages are written to console!');
    }

    greetFromByotLogger() {
        log.addConsoleTransport()//add console transport
        log.addFileTransport(BYOT_LOG_DEFAULT_PATH, BYOT_LOG_FILE_NAME) //  add file transport
        log.info('this is byot logger')
    }
}

const myPlayer = new Player()
myPlayer.greetFromDefaultWinston()
myPlayer.greetFromMyWinston()
myPlayer.greetFromByotLogger()

const anotherPlayer = new AnotherPlayer()
anotherPlayer.greet()
// anotherPlayer doesn't have to process the 'log' again, it uses the one that 'myPlayer' defines.
// as a result, the message of anotherPlayer.greet(){log.info(msg)} will be written in both console and BYOT_LOG_FILE_NAME.