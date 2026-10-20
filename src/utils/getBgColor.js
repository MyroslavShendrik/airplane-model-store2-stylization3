export function setBgColor (age) {
  const newYear =Number.parseInt(age)
  console.log("newYear:",newYear);
  let classNames = "item";
//   if (newYear <= 6) classNames = "item"
  if (newYear > 6) classNames = "older";
  if (newYear > 9) classNames = "old";
  if (Number.isNaN(newYear)) classNames = "allAge";
  console.log("classNames:", classNames)
  return classNames;

}