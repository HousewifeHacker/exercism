export function format(name: string, number: number): string {
  let order;
  let lastNums = `${number}`.slice(-2);
  let lastNum = `${number}`.slice(-1);
  if (lastNum === '1' && lastNums !== '11' ){
    order = `${number}st`;
  } else if (lastNum === '2' && lastNums !== '12' ){
    order  = `${number}nd`;
  } else if (lastNum === '3' && lastNums !== '13' ){
    order  = `${number}rd`;
  } else {
    order = `${number}th`;
  }

  return `${name}, you are the ${order} customer we serve today. Thank you!`
}
