"use client";

import { Calendar } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 

export default function Home() {
  function handleSelect(date: Date) {
    console.log(date); // native Date object
  }
  return <Calendar date={new Date()} onChange={handleSelect} />;
}
