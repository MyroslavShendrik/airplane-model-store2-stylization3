import { differenceInYears, getYear} from "date-fns";

// export function getManufacturingYears(year) {
// const startDate = new Date(year,0 ,1)
// console.log("startDate:",startDate);
// const currentDate = new Date()
// return differenceInYears(currentDate, startDate);
// }

export function getManufacturingYears(year) {
   // 1. Отримуємо поточну дату
const currentDate = new Date();
// 2. Витягуємо рік як число
const nowYear = getYear(currentDate);
// console.log("nowYear:",nowYear)
return nowYear - year;
}
