import React from "react";
import classNames from 'classnames';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ProjectListItem(props) {
  const projectClass = classNames('project_list_item', {
    'project_list_item--selected': props.selected
  });

  return (
    <li className={projectClass} onClick={props.setProject}>
      <span className="project_name">{props.name}</span>
      <span className="project_description">{props.description}</span>
      <aside>Deliverables: {props.count}</aside>
      {props.selected &&
        <span className="project_edit">
          <EditIcon className="mui_icons EditIcon" />
          <DeleteIcon className="mui_icons DeleteIcon"
            onClick={props.deleteProject}
          />
        </span>
      }
    </li>
  );
};