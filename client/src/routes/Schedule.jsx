import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/timegrid';
import NavBar from "../components/NavBar";

export default function Schedule() {
  return (
    <div>
      <NavBar />
      <main>
        <FullCalendar plugins={[dayGridPlugin]} initialView="timeGridWeek" />
      </main>
    </div>
  )
}