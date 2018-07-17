var ErrorKind;
(function (ErrorKind) {
    ErrorKind["NotFoundError"] = "NotFoundError";
    ErrorKind["DevicesNotFoundError"] = "DevicesNotFoundError";
    ErrorKind["NotReadableError"] = "NotReadableError";
    ErrorKind["TrackStartError"] = "TrackStartError";
    ErrorKind["OverconstrainedError"] = "OverconstrainedError";
    ErrorKind["ConstraintNotSatisfiedError"] = "ConstraintNotSatisfiedError";
    ErrorKind["NotAllowedError"] = "NotAllowedError";
    ErrorKind["PermissionDeniedError"] = "PermissionDeniedError";
})(ErrorKind || (ErrorKind = {}));
console.log(typeof (ErrorKind.ConstraintNotSatisfiedError));
console.log(ErrorKind);
var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tue"] = 2] = "tue";
    Days[Days["wed"] = 3] = "wed";
    Days[Days["thu"] = 4] = "thu";
    Days[Days["fri"] = 5] = "fri";
    Days[Days["sat"] = 6] = "sat";
})(Days || (Days = {}));
console.log(Days.fri);
console.log(Days);