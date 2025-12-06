"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarCn() {
  const [data, setData] = React.useState<Date | undefined>(new Date());
  return (
    <div className="max-w-2xl mx-auto">
      <Calendar
        mode="single"
        selected={data}
        onSelect={setData}
        className="rounded-md border shadow-sm w-full"
        captionLayout="dropdown"
      />
    </div>
  );
}
