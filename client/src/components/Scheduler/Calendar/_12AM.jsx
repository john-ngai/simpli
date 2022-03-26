// import './index.scss';
const helper = require('./helpers');

export default function _12AM(props) {
  const schedule = props.schedule;
  const time = '12am';
  const filteredSchedule = helper.getfilteredSchedule(helper.addTimeRange(schedule), time)
  const { sun, mon, tues, wed, thurs, fri, sat } = helper.getScheduledTasks(filteredSchedule, time);

  return (
    <tr>
      <td className="table time">12 AM</td>

      {sun.name && sun.lastHour ? <td className="table item booked name bottom">{sun.name}</td> :
        sun.name ? <td className="table item booked name">{sun.name}</td> :
          sun.lastHour ? <td className="table item booked bottom"></td> :
            sun.id ? <td className="table item booked"></td> :
              <td className="table item"></td>
      }

      {mon.name && mon.lastHour ? <td className="table item booked name bottom">{mon.name}</td> :
        mon.name ? <td className="table item booked name">{mon.name}</td> :
          mon.lastHour ? <td className="table item booked bottom"></td> :
            mon.id ? <td className="table item booked"></td> :
              <td className="table item"></td>
      }

      {tues.name && tues.lastHour ? <td className="table item booked name bottom">{tues.name}</td> :
        tues.name ? <td className="table item booked name">{tues.name}</td> :
          tues.lastHour ? <td className="table item booked bottom"></td> :
            tues.id ? <td className="table item booked"></td> :
              <td className="table item"></td>
      }

      {wed.name && wed.lastHour ? <td className="table item booked name bottom">{wed.name}</td> :
        wed.name ? <td className="table item booked name">{wed.name}</td> :
          wed.lastHour ? <td className="table item booked bottom"></td> :
            wed.id ? <td className="table item booked"></td> :
              <td className="table item"></td>
      }

      {thurs.name && thurs.lastHour ? <td className="table item booked name bottom">{thurs.name}</td> :
        thurs.name ? <td className="table item booked name">{thurs.name}</td> :
          thurs.lastHour ? <td className="table item booked bottom"></td> :
            thurs.id ? <td className="table item booked"></td> :
              <td className="table item"></td>
      }

      {fri.name && fri.lastHour ? <td className="table item booked name bottom">{fri.name}</td> :
        fri.name ? <td className="table item booked name">{fri.name}</td> :
          fri.lastHour ? <td className="table item booked bottom"></td> :
            fri.id ? <td className="table item booked"></td> :
              <td className="table item"></td>
      }

      {sat.name && sat.lastHour ? <td className="table item booked name bottom">{sat.name}</td> :
        sat.name ? <td className="table item booked name">{sat.name}</td> :
          sat.lastHour ? <td className="table item booked bottom"></td> :
            sat.id ? <td className="table item booked"></td> :
              <td className="table item"></td>
      }
    </tr>
  );
}
