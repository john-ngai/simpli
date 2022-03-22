import React from "react";
import classNames from 'classnames';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ProjectListItem.scss';

export default function ProjectListItem(props) {
  const projectClass = classNames('project_list_item', {
    'project_list_item--selected': props.selected
  });
  return (
    <li className={projectClass} onClick={props.setProject}>
      <span className="project_name">{props.name}</span>
      <span className="project_description">{props.description}</span>
      <span className="project_deliverables">{props.count} Deliverables</span>
      {props.count > 0 ? <aside>Percent Complete: {props.percentComplete}%</aside> : <aside>No Deliverables Yet! </aside>}
      {props.selected &&
        <span className="project_edit">
          <EditIcon id="edit_project" className="mui_icons"
            onClick={props.editProject}
          />
          <DeleteIcon id="delete_project" className="mui_icons"
            onClick={props.deleteProject}
          />
        </span>
      }
    </li>
  );
};  