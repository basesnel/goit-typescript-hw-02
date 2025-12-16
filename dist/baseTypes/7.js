var week;
(function (week) {
    week["MON"] = "Monday";
    week["TUE"] = "Tuesday";
    week["WED"] = "Wednesday";
    week["THU"] = "Thuesday";
    week["FRI"] = "Friday";
    week["SAT"] = "Saturday";
    week["SUN"] = "Sunday";
})(week || (week = {}));
function isWeekend(day) {
    switch (day) {
        case week.MON:
            return 'This day is work';
        case week.TUE:
            return 'This day is work';
        case week.WED:
            return 'This day is work';
        case week.THU:
            return 'This day is work';
        case week.FRI:
            return 'This day is work';
        case week.SAT:
            return 'This day is weekend';
        case week.SUN:
            return 'This day is weekend';
        default:
            return 'This day is wrong';
    }
}
function isWeekend2(day) {
    const weekdays = [week.MON, week.TUE, week.WED, week.THU, week.FRI];
    const weekends = [week.SAT, week.SUN];
    if (weekdays.includes(day))
        return 'This day is weekday';
    if (weekends.includes(day))
        return 'This day is weekend';
    return 'This day is wrong';
}
isWeekend2(week.FRI);
export {};
//# sourceMappingURL=7.js.map