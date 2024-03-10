export function isJSON(json: string) {
  try {
    JSON.parse(json);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function hexToRgbA(hex: string, opacity: number = 1) {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ", +" + opacity + ")";
  }
  throw new Error("Bad Hex");
}

export function parseJson<T>(json: string, defaultValue: T): T {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
}

export function paginate<T>(input: T[], page: number, limit: number) {
  return input.slice((page - 1) * limit, page * limit);
}

export function arrayFromNumber(number: number): number[] {
  const output = [];
  for (let index = 1; index <= number; index++) {
    output.push(index);
  }
  return output;
}
