// import './index.scss';
const helper = require('./helpers');

export default function _12AM(props) {
  const schedule = props.schedule;
  const time = '12am';
  const filteredSchedule = helper.getfilteredSchedule(helper.addTimeRange(schedule), time)
  const { sun, mon, tues, wed, thurs, fri, sat } = helper.getScheduledTasks(filteredSchedule, time);

  const edit = day => {
    if (day.id) {
      props.setScheduleItem(day['deliverable_id'], day['task_id'], day.id);
      props.transition();
    }
  }

  const completed = sun.completed;
  console.log('completed =', completed);

  return (
    <tr>
      <td className="table time">12 AM</td>

      {sun.name && sun.lastHour && sun.completed ?
        <td className="table item completed name bottom" onClick={() => edit(sun)}>{sun.name}</td> : sun.name && sun.lastHour ?
          <td className="table item booked name bottom" onClick={() => edit(sun)}>{sun.name}</td> :

          sun.name && sun.completed ?
            <td className="table item completed name" onClick={() => edit(sun)}>{sun.name}</td> : sun.name ?
              <td className="table item booked name" onClick={() => edit(sun)}>{sun.name}</td> :

              sun.lastHour && sun.completed ?
                <td className="table item completed bottom" onClick={() => edit(sun)}></td> : sun.lastHour ?
                  <td className="table item booked bottom" onClick={() => edit(sun)}></td> :

                  sun.id && sun.completed ?
                    <td className="table item completed" onClick={() => edit(sun)}></td> : sun.id ?
                      <td className="table item booked" onClick={() => edit(sun)}></td> :
                      <td className="table item"></td>
      }

      {mon.name && mon.lastHour && mon.completed ?
        <td className="table item completed name bottom" onClick={() => edit(mon)}>{mon.name}</td> : mon.name && mon.lastHour ?
          <td className="table item booked name bottom" onClick={() => edit(mon)}>{mon.name}</td> :

          mon.name && mon.completed ?
            <td className="table item completed name" onClick={() => edit(mon)}>{mon.name}</td> : mon.name ?
              <td className="table item booked name" onClick={() => edit(mon)}>{mon.name}</td> :

              mon.lastHour && mon.completed ?
                <td className="table item completed bottom" onClick={() => edit(mon)}></td> : mon.lastHour ?
                  <td className="table item booked bottom" onClick={() => edit(mon)}></td> :

                  mon.id && mon.completed ?
                    <td className="table item completed" onClick={() => edit(mon)}></td> : mon.id ?
                      <td className="table item booked" onClick={() => edit(mon)}></td> :
                      <td className="table item"></td>
      }

      {tues.name && tues.lastHour && tues.completed ?
        <td className="table item completed name bottom" onClick={() => edit(tues)}>{tues.name}</td> : tues.name && tues.lastHour ?
          <td className="table item booked name bottom" onClick={() => edit(tues)}>{tues.name}</td> :

          tues.name && tues.completed ?
            <td className="table item completed name" onClick={() => edit(tues)}>{tues.name}</td> : tues.name ?
              <td className="table item booked name" onClick={() => edit(tues)}>{tues.name}</td> :

              tues.lastHour && tues.completed ?
                <td className="table item completed bottom" onClick={() => edit(tues)}></td> : tues.lastHour ?
                  <td className="table item booked bottom" onClick={() => edit(tues)}></td> :

                  tues.id && tues.completed ?
                    <td className="table item completed" onClick={() => edit(tues)}></td> : tues.id ?
                      <td className="table item booked" onClick={() => edit(tues)}></td> :
                      <td className="table item"></td>
      }

      {wed.name && wed.lastHour && wed.completed ?
        <td className="table item completed name bottom" onClick={() => edit(wed)}>{wed.name}</td> : wed.name && wed.lastHour ?
          <td className="table item booked name bottom" onClick={() => edit(wed)}>{wed.name}</td> :

          wed.name && wed.completed ?
            <td className="table item completed name" onClick={() => edit(wed)}>{wed.name}</td> : wed.name ?
              <td className="table item booked name" onClick={() => edit(wed)}>{wed.name}</td> :

              wed.lastHour && wed.completed ?
                <td className="table item completed bottom" onClick={() => edit(wed)}></td> : wed.lastHour ?
                  <td className="table item booked bottom" onClick={() => edit(wed)}></td> :

                  wed.id && wed.completed ?
                    <td className="table item completed" onClick={() => edit(wed)}></td> : wed.id ?
                      <td className="table item booked" onClick={() => edit(wed)}></td> :
                      <td className="table item"></td>
      }

      {thurs.name && thurs.lastHour && thurs.completed ?
        <td className="table item completed name bottom" onClick={() => edit(thurs)}>{thurs.name}</td> : thurs.name && thurs.lastHour ?
          <td className="table item booked name bottom" onClick={() => edit(thurs)}>{thurs.name}</td> :

          thurs.name && thurs.completed ?
            <td className="table item completed name" onClick={() => edit(thurs)}>{thurs.name}</td> : thurs.name ?
              <td className="table item booked name" onClick={() => edit(thurs)}>{thurs.name}</td> :

              thurs.lastHour && thurs.completed ?
                <td className="table item completed bottom" onClick={() => edit(thurs)}></td> : thurs.lastHour ?
                  <td className="table item booked bottom" onClick={() => edit(thurs)}></td> :

                  thurs.id && thurs.completed ?
                    <td className="table item completed" onClick={() => edit(thurs)}></td> : thurs.id ?
                      <td className="table item booked" onClick={() => edit(thurs)}></td> :
                      <td className="table item"></td>
      }

      {fri.name && fri.lastHour && fri.completed ?
        <td className="table item completed name bottom" onClick={() => edit(fri)}>{fri.name}</td> : fri.name && fri.lastHour ?
          <td className="table item booked name bottom" onClick={() => edit(fri)}>{fri.name}</td> :

          fri.name && fri.completed ?
            <td className="table item completed name" onClick={() => edit(fri)}>{fri.name}</td> : fri.name ?
              <td className="table item booked name" onClick={() => edit(fri)}>{fri.name}</td> :

              fri.lastHour && fri.completed ?
                <td className="table item completed bottom" onClick={() => edit(fri)}></td> : fri.lastHour ?
                  <td className="table item booked bottom" onClick={() => edit(fri)}></td> :

                  fri.id && fri.completed ?
                    <td className="table item completed" onClick={() => edit(fri)}></td> : fri.id ?
                      <td className="table item booked" onClick={() => edit(fri)}></td> :
                      <td className="table item"></td>
      }

      {sat.name && sat.lastHour && sat.completed ?
        <td className="table item completed name bottom" onClick={() => edit(sat)}>{sat.name}</td> : sat.name && sat.lastHour ?
          <td className="table item booked name bottom" onClick={() => edit(sat)}>{sat.name}</td> :

          sat.name && sat.completed ?
            <td className="table item completed name" onClick={() => edit(sat)}>{sat.name}</td> : sat.name ?
              <td className="table item booked name" onClick={() => edit(sat)}>{sat.name}</td> :

              sat.lastHour && sat.completed ?
                <td className="table item completed bottom" onClick={() => edit(sat)}></td> : sat.lastHour ?
                  <td className="table item booked bottom" onClick={() => edit(sat)}></td> :

                  sat.id && sat.completed ?
                    <td className="table item completed" onClick={() => edit(sat)}></td> : sat.id ?
                      <td className="table item booked" onClick={() => edit(sat)}></td> :
                      <td className="table item"></td>
      }
    </tr>
  );
}
