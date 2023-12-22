"use client";

import { Calendar } from "react-date-range";

export default function Home() {
  function handleSelect(date: Date) {
    console.log(date); // native Date object
  }
  return <Calendar date={new Date()} onChange={handleSelect} />;
}
