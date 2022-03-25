1st Drop-Down Menu - Projects
* Set our 'project' state (project id)

2nd Drop-Down Menu - Deliverables

3rd Drop-Down Menu - Tasks

days = [
  {
    "id": 1,
    "name": "Sunday",
    "schedule": [],
  },
  {
    "id": 2,
    "name": "Monday",
    "schedule": [],
  },
  {
    "id": 3,
    "name": "Tuesday",
    "schedule": [],
  },
  {
    "id": 4,
    "name": "Wednesday",
    "schedule": [],
  },
  {
    "id": 5,
    "name": "Thursday",
    "schedule": [],
  },
  {
    "id": 6,
    "name": "Friday",
    "schedule": [],
  },
  {
    "id": 7,
    "name": "Saturday",
    "schedule": [],
  },
]

schedule = {
  "1": {
    "id": 1,
    "start_time": "12pm",
    "end_time": 2pm,
    "day_id": 1
    "task": {
      id: 2
      "name": "Clean out the closet",
      "description": "Place valuables somewhere safe"
    },
  },
  ...
}

table=days
PK id
name

table=schedule(appointments)
PK id
FK day_id (>- many to one)
FK task_id (>- many to one)
start_time
end_time