export const stringToDate = (stringDate: string): Date => {
  const [day, month, year] = stringDate.split("/").map(Number);

  console.log(day, month, year);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    throw new Error("Invalid date format");
  }

  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  return date;
};
