const enum week {
  MON = 'Monday',
  TUE = 'Tuesday',
  WED = 'Wednesday',
  THU = 'Thuesday',
  FRI = 'Friday',
  SAT = 'Saturday',
  SUN = 'Sunday',
}

function isWeekend(day: week): string {
  switch (day) {
    case week.MON:
      return 'This day is weekday';
    case week.TUE:
      return 'This day is weekday';
    case week.WED:
      return 'This day is weekday';
    case week.THU:
      return 'This day is weekday';
    case week.FRI:
      return 'This day is weekday';
    case week.SAT:
      return 'This day is weekend';
    case week.SUN:
      return 'This day is weekend';
    default:
      return 'This day is wrong';
  }
}

function isWeekend2(day: week): string {
  const weekdays = [week.MON, week.TUE, week.WED, week.THU, week.FRI];
  const weekends = [week.SAT, week.SUN];

  if (weekdays.includes(day)) return 'This day is weekday';
  if (weekends.includes(day)) return 'This day is weekend';

  return 'This day is wrong';
}

export { week, isWeekend, isWeekend2 };
