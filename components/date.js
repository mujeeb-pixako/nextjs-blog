import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
  //https://date-fns.org/v2.29.3/docs/format
  //LLLL=>January ; d=>1, 2, ..., 31 ; yyyy 2023
  //
}
