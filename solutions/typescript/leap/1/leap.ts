export function isLeap(year: number) : boolean {
  if (year % 4 === 0) {
    // if also divisible by 100, return true
    if (year % 100 === 0) {
      return (year % 400 === 0);
    }
    return true;
  } else {
    return false;
  }
}
