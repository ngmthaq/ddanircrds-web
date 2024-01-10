import React, { FC, useEffect, useState } from "react";
import { CircularLoading } from "./CircularLoading";
import { EventBusUtils } from "@/common/utils";

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
