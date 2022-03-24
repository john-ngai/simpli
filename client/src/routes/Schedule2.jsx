import React from "react";
import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import moment from "moment";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import NavBar from "../components/NavBar";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

export default function Schedule() {
  const locales = {
    "en-CA": require("date-fns/locale/en-CA")
  }
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  });

  const views = {
    MONTH: 'month',
    WEEK: 'week'
  }

  const DnDCalendar = withDragAndDrop(Calendar)

  // TEST CODE. REMOVE LATER
  const events = [{
    id: 0,
    title: "Demo Day: Presentation",
    start: new Date(2022, 3, 23),
    end: new Date(2022, 3, 23)
  },
  {
    id: 1,
    title: "Clean the bathroom",
    start: new Date(2022, 3, 22),
    end: new Date(2022, 3, 22)
  },
  {
    id: 2,
    title: "Draw website mockup and ERDs",
    start: new Date(2022, 3, 23),
    end: new Date(2022, 3, 23)
  },
  {
    id: 3,
    title: "Finals",
    start: new Date(2022, 3, 20),
    end: new Date(2022, 3, 26)
  },
  {
    id: 4,
    title: "Video Record",
    start: new Date(2015, 3, 14, 15, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  ];
  // TEST CODE. REMOVE LATER

  return (
    <div>
      <NavBar />
      <div>
        <Calendar
          localizer={localizer}
          defaultView={views}
          startAccessor="start"
          endAccessor="end"
          events={events}
          style={{ height: 500, margin: "50px" }}
        // draggableAccessor={(event) => true} 
        />
      </div>
    </div>
  )
}