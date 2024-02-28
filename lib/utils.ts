import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HTMLQueryParse {
  key: string;
  value: string;
  searchParams: string;
}
export function htmlQueryParse({ key, value, searchParams }: HTMLQueryParse) {
  const currentUrl = qs.parse(searchParams);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}
