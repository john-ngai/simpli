import React from 'react';
import useAppData from '../../../hooks/useAppData';
import './Calendar.scss';
// Components
import _7AM from './_7AM';
import _8AM from './_8AM';
import _9AM from './_9AM';
import _10AM from './_10AM';
import _11AM from './_11AM';
import _12PM from './_12PM';
import _1PM from './_1PM';
import _2PM from './_2PM';
import _3PM from './_3PM';
import _4PM from './_4PM';
import _5PM from './_5PM';
import _6PM from './_6PM';
import _7PM from './_7PM';
import _8PM from './_8PM';
import _9PM from './_9PM';
import _10PM from './_10PM';
import _11PM from './_11PM';
import _12AM from './_12AM';

const helper = require('./helpers');

export default function Calendar() {
  const { state } = useAppData();
  // const schedule = state.schedule;


  const schedule = state.schedule;
  console.log(schedule);

  // Temp data
  /*const schedule = {
    1: {
      id: 1,
      start_time: "7am",
      end_time: "8am",
      day_id: 1,
      task: {
        id: 2,
        name: "Clean the entire house",
        description: "Place valuables somewhere safe"
      }
    },
    13: {
      id: 13,
      start_time: "4pm",
      end_time: "7pm",
      day_id: 1,
      task: {
        id: 21,
        name: "Some other task",
        description: "Some other description"
      }
    },
    2: {
      id: 2,
      start_time: "9am",
      end_time: "12pm",
      day_id: 2,
      task: {
        id: 2,
        name: "Purchase industrial vacuum",
        description: "Random description 1"
      }
    },
    3: {
      id: 3,
      start_time: "4pm",
      end_time: "6pm",
      day_id: 3,
      task: {
        id: 2,
        name: "Visit Sifu",
        description: "Random description 1"
      }
    },
    4: {
      id: 4,
      start_time: "11am",
      end_time: "12pm",
      day_id: 4,
      task: {
        id: 2,
        name: "Browse for jobs near the house",
        description: "Random description 1"
      }
    },
    5: {
      id: 5,
      start_time: "10am",
      end_time: "11p  m",
      day_id: 5,
      task: {
        id: 2,
        name: "Research best dog training guides",
        description: "Random description 1"
      }
    },
    6: {
      id: 6,
      start_time: "7am",
      end_time: "2pm",
      day_id: 6,
      task: {
        id: 2,
        name: "Calculate corporate HST refund",
        description: "Random description 1"
      }
    },
    7: {
      id: 7,
      start_time: "9am",
      end_time: "11am",
      day_id: 7,
      task: {
        id: 2,
        name: "Shortlist new dinner recipes",
        description: "Random description 1"
      }
    },
    8: {
      id: 8,
      start_time: "1pm",
      end_time: "4pm",
      day_id: 7,
      task: {
        id: 3,
        name: "Shortlist new dinner recipes",
        description: "Random description 1"
      }
    },
    9: {
      id: 9,
      start_time: "6pm",
      end_time: "8pm",
      day_id: 7,
      task: {
        id: 4,
        name: "Eat your ABCDs",
        description: "Random description 1"
      }
    }
  };/**/
  
  return (
    <section id="calendar">
      <table id="table">
        <tbody>
        <tr>
          <td className="table header time"><b>Time</b></td>
          <td className="table header"><b>SUNDAY</b></td>
          <td className="table header"><b>MONDAY</b></td>
          <td className="table header"><b>TUESDAY</b></td>
          <td className="table header"><b>WEDNESDAY</b></td>
          <td className="table header"><b>THURSDAY</b></td>
          <td className="table header"><b>FRIDAY</b></td>
          <td className="table header"><b>SATURDAY</b></td>
        </tr>

        <_7AM schedule={schedule}/>
        <_8AM schedule={schedule}/>
        <_9AM schedule={schedule}/>
        <_10AM schedule={schedule}/>
        <_11AM schedule={schedule}/>
        <_12PM schedule={schedule}/>
        <_1PM schedule={schedule}/>
        <_2PM schedule={schedule}/>
        <_3PM schedule={schedule}/>
        <_4PM schedule={schedule}/>
        <_5PM schedule={schedule}/>
        <_6PM schedule={schedule}/>
        <_7PM schedule={schedule}/>
        <_8PM schedule={schedule}/>
        <_9PM schedule={schedule}/>
        <_10PM schedule={schedule}/>
        <_11PM schedule={schedule}/>
        <_12AM schedule={schedule}/>
        </tbody>
      </table>
    </section>
  );
}