const addMonthsFromCurrentDate  = (monthsToAdd) => {
  let date = new Date();
  let d = date.getDate();
  date.setMonth(date.getMonth() + +monthsToAdd);
  if (date.getDate() !== d) {
    date.setDate(0);
  }
  return date;
}

export default addMonthsFromCurrentDate;
