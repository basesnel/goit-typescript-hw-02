// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
// і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
var Week;
(function (Week) {
    Week["MON"] = "Monday";
    Week["TUE"] = "Tuesday";
    Week["WED"] = "Wednesday";
    Week["THU"] = "Thuesday";
    Week["FRI"] = "Friday";
    Week["SAT"] = "Saturday";
    Week["SUN"] = "Sunday";
})(Week || (Week = {}));
function isWeekend(day) {
    switch (day) {
        case Week.MON:
            return 'This day is weekday';
        case Week.TUE:
            return 'This day is weekday';
        case Week.WED:
            return 'This day is weekday';
        case Week.THU:
            return 'This day is weekday';
        case Week.FRI:
            return 'This day is weekday';
        case Week.SAT:
            return 'This day is weekend';
        case Week.SUN:
            return 'This day is weekend';
        default:
            return 'Wrong day of the week';
    }
}
function isWeekend2(day) {
    const weekdays = [Week.MON, Week.TUE, Week.WED, Week.THU, Week.FRI];
    const weekends = [Week.SAT, Week.SUN];
    if (weekdays.includes(day))
        return 'This day is weekday';
    if (weekends.includes(day))
        return 'This day is weekend';
    return 'Wrong day of the week';
}
var Weekdays;
(function (Weekdays) {
    Weekdays["MON"] = "Monday";
    Weekdays["TUE"] = "Tuesday";
    Weekdays["WED"] = "Wednesday";
    Weekdays["THU"] = "Thuesday";
    Weekdays["FRI"] = "Friday";
})(Weekdays || (Weekdays = {}));
var Weekends;
(function (Weekends) {
    Weekends["SAT"] = "Saturday";
    Weekends["SUN"] = "Sunday";
})(Weekends || (Weekends = {}));
function isWeekend3(day) {
    var _a;
    const dayKey = (_a = Object.keys(Week)[Object.values(Week).indexOf(day)]) !== null && _a !== void 0 ? _a : 'NONE';
    if (dayKey in Weekdays)
        return 'This day is weekday';
    if (dayKey in Weekends)
        return 'This day is weekend';
    return 'Wrong day of the week';
}
export { Week, isWeekend, isWeekend2, isWeekend3 };
//# sourceMappingURL=7.js.map