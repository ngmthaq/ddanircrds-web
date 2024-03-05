import { SnackbarInputType } from "../providers/NotistackProvider";
import EventBusUtils from "./bus.utils";

export function openLoading(open: boolean = true) {
  EventBusUtils.emit<boolean>("openAppLoading", open);
}

export function openSnackbar(payload: SnackbarInputType) {
  EventBusUtils.emit<SnackbarInputType>("openSnackbar", payload);
}

export async function delay(seconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

export async function convertBlobToBase64(blob: Blob) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    } catch (error) {
      reject(error);
    }
  });
}
