export class ValidationError extends Error {
    constructor(text: string) {
        super(text)
        // Set the prototype explicitly, see https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, ValidationError.prototype)
    }
}

export function notNullOrUndefined(toCheck: any) {
    return !nullOrUndefined(toCheck)
}

export function nullOrUndefined(toCheck: any) {
    return toCheck === undefined || toCheck === null
}

export function validateParameter(parameter: any, validateFunction: Function, errorMessage: string) {
    if (validateFunction(parameter)) {
        throw new ValidationError(errorMessage)
    }
}

export function hasProperty(element: Object, property: string) {
    const properties = property.split('.')
    return _hasProperty(element, properties)
}

function _hasProperty(element: Object, path: Array<string>) {
    const lowerPath = path[0]
    if (element.hasOwnProperty(lowerPath)) {
        path.splice(0, 1)
        return path.length === 0 ? true : _hasProperty(element[lowerPath], path)
    } else {
        return false
    }
}