import { useEffect, useState } from "react";

export function useOnline() {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  const handleOnline = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOnline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOnline);
    };
  });

  return { isOnline };
}
