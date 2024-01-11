import React, { FC, useEffect, useState } from "react";
import { EventBusUtils } from "@/common/utils";
import { CircularLoading } from "./CircularLoading";

export const AppLoading: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenLoading = (open: boolean) => {
    setIsLoading(open);
  };

  useEffect(() => {
    EventBusUtils.on<boolean>("openAppLoading", handleOpenLoading);
    return () => EventBusUtils.off<boolean>("openAppLoading", handleOpenLoading);
  });

  return isLoading ? <CircularLoading /> : <></>;
};
