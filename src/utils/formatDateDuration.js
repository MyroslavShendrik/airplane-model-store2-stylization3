import { differenceInYears, parseISO } from 'date-fns';

export function getManufacturingYears(start, end) {
 const startDate = typeof start === 'string' ? parseISO(start) : start;
  const endDate = typeof end === 'string' ? parseISO(end) : end;
  return differenceInYears(endDate, startDate);
};