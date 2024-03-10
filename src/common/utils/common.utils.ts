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

export function isValidUrl(userInput: string) {
  const regex =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
  const res = userInput.match(regex);
  if (res == null) return false;
  else return true;
}

export function randomString(length: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
