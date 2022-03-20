import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ProjectListItem(props) {
  return (
    <li
      className="project_list_item"
      onClick={() => {
        props.setProject(props.id);
        props.transition('DELIVERABLES');
      }}
    >
      <span className="project_name">{props.name}</span>
      <span className="project_description">{props.description}</span>
      <span className="project_edit">
        <EditIcon className="mui_icons EditIcon"/>
        <DeleteIcon className="mui_icons DeleteIcon"/>
      </span>
    </li>
  );
};