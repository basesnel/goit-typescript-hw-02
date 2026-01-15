import { isWeekend, isWeekend2, Week } from './baseTypes/7';
import { page1, page2 } from './baseTypes/9';
import { getPromise } from './generic/1';
console.log(`${Week.MON} - ${isWeekend(Week.MON)}`);
console.log(`${Week.TUE} - ${isWeekend(Week.TUE)}`);
console.log(`${Week.WED} - ${isWeekend(Week.WED)}`);
console.log(`${Week.THU} - ${isWeekend(Week.THU)}`);
console.log(`${Week.FRI} - ${isWeekend(Week.FRI)}`);
console.log(`${Week.SAT} - ${isWeekend(Week.SAT)}`);
console.log(`${Week.SUN} - ${isWeekend(Week.SUN)}`);
console.log(`${Week.MON} - ${isWeekend2(Week.MON)}`);
console.log(`${Week.TUE} - ${isWeekend2(Week.TUE)}`);
console.log(`${Week.WED} - ${isWeekend2(Week.WED)}`);
console.log(`${Week.THU} - ${isWeekend2(Week.THU)}`);
console.log(`${Week.FRI} - ${isWeekend2(Week.FRI)}`);
console.log(`${Week.SAT} - ${isWeekend2(Week.SAT)}`);
console.log(`${Week.SUN} - ${isWeekend2(Week.SUN)}`);
console.log(page1);
console.log(page2);
getPromise().then(data => {
    console.log(data);
});
//# sourceMappingURL=index.js.map