import * as winston from 'winston'
import { nullOrUndefined, notNullOrUndefined } from './Validator'
import * as stackTrace from 'stack-trace'
import * as path from 'path'
import * as fs from 'fs'

export const BYOT_LOG_FILE_NAME = 'byot.log'
export const BYOT_LOG_DEFAULT_PATH = process.cwd()

export class ByotLogger {

    _winstonLogger: winston.LoggerInstance

    constructor() {
        this._winstonLogger = new winston.Logger
    }

    addFileTransport(logPath: string, fileName: string = ''): void {
        ByotLogger._ensureWritablePath(logPath)
        const filePath = path.join(logPath, fileName)
        if (nullOrUndefined(this._winstonLogger.transports) || nullOrUndefined(this._winstonLogger.transports.file)) {
            this._winstonLogger.add(winston.transports.File, { filename: filePath })
        }
    }

    addConsoleTransport(): void {
        if (nullOrUndefined(this._winstonLogger.transports) || nullOrUndefined(this._winstonLogger.transports.console)) {
            this._winstonLogger.add(winston.transports.Console)
        }
    }

    removeConsoleTransport() {
        if (notNullOrUndefined(this._winstonLogger.transports.console)) {
            this._winstonLogger.remove(winston.transports.Console)
        }
    }

    error(msg: string) {
        this._winstonLogger.error(msg, ByotLogger._getLogMetaData())
    }

    info(msg: string) {
        this._winstonLogger.info(msg, ByotLogger._getLogMetaData())
    }

    warn(msg: string) {
        this._winstonLogger.warn(msg, ByotLogger._getLogMetaData())
    }

    debug(msg: string) {
        this._winstonLogger.debug(msg, ByotLogger._getLogMetaData())
    }

    static _getLogMetaData(): Object {
        const trace = stackTrace.get()
        return { file: trace[2].getFileName(), line: trace[2].getLineNumber() }
    }

    static _ensureWritablePath(pathName: string): string {
        pathName = path.isAbsolute(pathName) ? pathName : path.resolve(process.cwd(), pathName)
        if (!fs.existsSync(pathName)) {
            fs.mkdirSync(pathName)
        }
        fs.accessSync(pathName, fs.constants.W_OK)
        return pathName
    }
}

export const Logging: ByotLogger = new ByotLogger()