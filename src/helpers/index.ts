import React from "react";
import { DATE } from "../constants";
import Cookies from "js-cookie";

export const refreshDate = {
  hoursMinutes: (date: string): string => {
    return date.slice(
      DATE.START_DATE_HOURS_MINUTES,
      DATE.END_DATE_HOURS_MINUTES,
    );
  },

  date: (date: string): string => {
    const day: string = date.slice(DATE.START_DATE_DAY, DATE.END_DATE_DAY);
    const month: string = date.slice(
      DATE.START_DATE_MONTH,
      DATE.END_DATE_MONTH,
    );
    return `${day}.${month}`;
  },
};

export const scrollDown = (blockRef: React.RefObject<HTMLElement>) => {
  if (blockRef.current) {
    blockRef.current.scrollTop = blockRef.current.scrollHeight;
  }
};

export const checkCookies = (value: string) => {
  return Cookies.get(`${value}`) ? Cookies.get(`${value}`) : "";
};
