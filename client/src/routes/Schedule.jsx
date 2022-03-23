import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import NavBar from "../components/NavBar";

export default function Schedule() {

  // TEST CODE. REMOVE LATER
  const events = [{
    title: 'Demo Day: Presentation',
    start: '2022-03-23T16:00:00Z',
    end: '2022-03-23T17:00:00Z'
  },
  {
    title: 'Clean the bathroom',
    start: '2022-03-22T14:00:00Z',
    end: '2022-03-22T15:15:00Z'
  },
  {
    title: 'Draw website mockup and ERDs',
    start: '2022-03-25T14:00:00Z',
    end: '2022-03-25T17:30:00Z'
  },
  {
    title: 'Finals',
    start: '2022-03-20',
    end: '2022-03-26'
  }
  ];
  // TEST CODE. REMOVE LATER

  return (
    <div>
      <NavBar />
      <div className="scheduler">
        <div>
          <button className="customButton" onClick={() => alert("Add Deliverable button clicked!")}>Add Deliverable</button>
          <button className="customButton" onClick={() => alert("Add Task button clicked!")}>Add Task</button>
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            center: 'dayGridMonth, timeGridWeek'
          }}
          customButtons={{
            new: {
              text: 'Add Task',
              click: () => alert("Add Task button clicked!")
            }
            // new: {
            //   text: 'Add Deliverable',
            //   click: () => alert("Add Deliverable button clicked!")
            // }
          }}
          events={events}
          editable="true"
          droppable="true"
          eventColor="Black"
        />
      </div>
    </div>
  )
}