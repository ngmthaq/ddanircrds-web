import Cookie from "js-cookie";

export type KeyStorageType = "theme";

export function setStorage<T>(key: KeyStorageType, value: T): void {
  const ref = { value };
  const json = JSON.stringify(ref);
  Cookie.set(key, json, { expires: 60 });
}

export function setSessionStorage<T>(key: KeyStorageType, value: T): void {
  const ref = { value };
  const json = JSON.stringify(ref);
  Cookie.set(key, json);
}

export function getStorage<T>(key: KeyStorageType): T | null {
  try {
    const json = Cookie.get(key);
    if (!json) return null;
    const ref: any = JSON.parse(json);
    process.env.NODE_ENV === "development" && console.info({ key, ref });
    return ref && ref.value ? ref.value : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function removeStorage(key: KeyStorageType): void {
  Cookie.remove(key);
  Cookie.remove(key, { expires: 60 });
}

export function clearStorage(): void {
  Object.keys(Cookie.get()).forEach((key: any) => {
    removeStorage(key);
  });
}
