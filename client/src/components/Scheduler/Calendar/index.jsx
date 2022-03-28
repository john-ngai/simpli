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

export default function Calendar(props) {
  const { state, getProjectSchedule } = useAppData();
  const project = props.project;
  const schedule = props.schedule;

  const projectSchedule = getProjectSchedule(project, schedule);

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

        <_7AM schedule={projectSchedule}/>
        <_8AM schedule={projectSchedule}/>
        <_9AM schedule={projectSchedule}/>
        <_10AM schedule={projectSchedule}/>
        <_11AM schedule={projectSchedule}/>
        <_12PM schedule={projectSchedule}/>
        <_1PM schedule={projectSchedule}/>
        <_2PM schedule={projectSchedule}/>
        <_3PM schedule={projectSchedule}/>
        <_4PM schedule={projectSchedule}/>
        <_5PM schedule={projectSchedule}/>
        <_6PM schedule={projectSchedule}/>
        <_7PM schedule={projectSchedule}/>
        <_8PM schedule={projectSchedule}/>
        <_9PM schedule={projectSchedule}/>
        <_10PM schedule={projectSchedule}/>
        <_11PM schedule={projectSchedule}/>
        <_12AM schedule={projectSchedule}/>
        </tbody>
      </table>
    </section>
  );
}