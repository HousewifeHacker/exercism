export function decodedResistorValue(bands: string[]) : string {
  let units, main;
  let [band0, band1, band2] = bands;
  let base = COLORS.indexOf(band0)*10 + COLORS.indexOf(band1);
  let power = COLORS.indexOf(band2);
  let ohms = base * 10**power
  switch (true) {
    case ohms >= 10**9:
      main = ohms / 10**9;
      units = "gigaohms";
      break;
    case ohms >= 10**6:
      main = ohms / 10**6;
      units = "megaohms";
      break;
    case ohms >= 10**3:
      main = ohms / 10**3;
      units = "kiloohms";
      break;
    default:
      main = ohms;
      units = "ohms";
  }
  return `${main} ${units}`;
}

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]