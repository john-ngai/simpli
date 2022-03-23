import React from "react";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import NavBar from "../components/NavBar";

export default function Schedule() {
  return (
    <div>
      <NavBar />
      <div>
        <FullCalendar plugins={[timeGridPlugin]} initialView="timeGridWeek" />
      </div>
    </div>
  )
}