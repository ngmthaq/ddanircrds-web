import { httpsCallable } from "firebase/functions";
import { firebaseFunctions } from "@/configs/firebase";

export const getFunction = (functionName: string) => {
  return httpsCallable(firebaseFunctions(), functionName);
};
