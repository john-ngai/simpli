import './Calendar.scss';
const helper = require('./helpers');

export default function _5PM(props) {
  const schedule = props.schedule;
  const time = '5pm';
  const filteredSchedule = helper.getfilteredSchedule(helper.addTimeRange(schedule), time)
  const { sun, mon, tues, wed, thurs, fri, sat } = helper.getScheduledTasks(filteredSchedule, time);

  return (
    <tr>
      <td className="table time">5 PM</td>
      {sun.name ? <td className="table item booked name">{sun.name}</td> :
        sun.id ? <td className="table item booked"></td> :
          <td className="table item"></td>
      }

      {mon.name ? <td className="table item booked name">{mon.name}</td> :
        mon.id ? <td className="table item booked"></td> :
          <td className="table item"></td>
      }

      {tues.name ? <td className="table item booked name">{tues.name}</td> :
        tues.id ? <td className="table item booked"></td> :
          <td className="table item"></td>
      }

      {wed.name ? <td className="table item booked name">{wed.name}</td> :
        wed.id ? <td className="table item booked"></td> :
          <td className="table item"></td>
      }

      {thurs.name ? <td className="table item booked name">{thurs.name}</td> :
        thurs.id ? <td className="table item booked"></td> :
          <td className="table item"></td>
      }

      {fri.name ? <td className="table item booked name">{fri.name}</td> :
        fri.id ? <td className="table item booked"></td> :
          <td className="table item"></td>
      }

      {sat.name ? <td className="table item booked name last">{sat.name}</td> :
        sat.id ? <td className="table item booked last"></td> :
          <td className="table item last"></td>
      }
    </tr>
  );
}
