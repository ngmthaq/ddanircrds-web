import { EventBusUtils } from "../utils";

export function useLoading() {
  const openAppLoading = (open: boolean = true) => {
    EventBusUtils.emit<boolean>("openAppLoading", open);
  };

  return { openAppLoading };
}
