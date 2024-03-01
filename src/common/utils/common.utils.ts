export function isJSON(json: string) {
  try {
    JSON.parse(json);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
