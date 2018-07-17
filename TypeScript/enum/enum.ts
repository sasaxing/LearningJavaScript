enum ErrorKind {
    NotFoundError = 'NotFoundError',
    DevicesNotFoundError = 'DevicesNotFoundError',
    NotReadableError = 'NotReadableError',
    TrackStartError = 'TrackStartError',
    OverconstrainedError = 'OverconstrainedError',
    ConstraintNotSatisfiedError = 'ConstraintNotSatisfiedError',
    NotAllowedError = 'NotAllowedError',
    PermissionDeniedError = 'PermissionDeniedError',
}

console.log(typeof(ErrorKind.ConstraintNotSatisfiedError));

enum Days {
    sun, mon, tue, wed, thu, fri, sat
}
console.log(Days.fri);
