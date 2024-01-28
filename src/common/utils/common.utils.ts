export async function delay(seconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

export function isJSON(json: string) {
  try {
    JSON.parse(json);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
