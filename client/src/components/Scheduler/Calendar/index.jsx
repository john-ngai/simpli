import React from 'react';
import useAppData from '../../../hooks/useAppData';
import './index.scss';
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
  const schedule = state.schedule;
  
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