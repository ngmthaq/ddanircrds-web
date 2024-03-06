import dayjs from "dayjs";

export const convertMillisecondsToDatetime = (milliseconds: number, format = "DD/MM/YYYY") => {
  return dayjs(milliseconds).format(format);
};

export const convertSecondsToDatetime = (seconds: number, format = "DD/MM/YYYY") => {
  return dayjs.unix(seconds).format(format);
};
