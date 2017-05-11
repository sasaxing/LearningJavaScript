function validateParameter(parameter: any, validateFunction: Function, errorMessage: string) {
    if (validateFunction(parameter)) {
        console.log(errorMessage)
    }
}

let a = 1
validateParameter(a, () => typeof (a) !== 'number', 'a is not a number') // typeof(a), the a is the global a
validateParameter(a, (toCheck) => typeof (toCheck) !== 'number', 'a is not a number') // toCheck is the parameter, which refers to a here 
validateParameter(a, (p1, p2) => typeof (p1) !== 'number' && typeof ('p2') !== 'number', 'a is not a number') // more than one paramter is passed in , the 2nd is ignored.