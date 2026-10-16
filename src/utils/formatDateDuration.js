import { differenceInYears, parseISO } from 'date-fns';

export function getManufacturingYears(start, end) {
  const startDate = typeof start === 'string' ? parseISO(start) : start;

  const endDate =
    end === 'now'
      ? new Date()
      : typeof end === 'string'
        ? parseISO(end)
        : end;

  const years = differenceInYears(endDate, startDate);
console.log('start:', start);
console.log('end:', end);
console.log('years:', years);
return end === 'now' ? `${years}+` : years;
}
