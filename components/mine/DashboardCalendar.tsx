"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DashboardCalendar() {
  const [dropdown, setDropdown] =
    React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
      "dropdown"
    )
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
    <div className="flex flex-col  w-[97%]  ">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        captionLayout={dropdown}
        className="  shadow-sm w-full rounded-xl h-full m-0 p-5 beige "
      />
      
    </div>
  )
}
