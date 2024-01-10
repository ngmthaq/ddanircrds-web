import { EventBusUtils } from "../utils";

export const useLoading = () => {
  const openAppLoading = (open: boolean = true) => {
    EventBusUtils.emit<boolean>("openAppLoading", open);
  };

  return { openAppLoading };
};
