import { SnackbarInputType } from "../providers/NotistackProvider";
import EventBusUtils from "./bus.utils";

export function openLoading(open: boolean = true) {
  EventBusUtils.emit<boolean>("openAppLoading", open);
}

export function openSnackbar(payload: SnackbarInputType) {
  EventBusUtils.emit<SnackbarInputType>("openSnackbar", payload);
}
