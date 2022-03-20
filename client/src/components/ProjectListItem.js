import React from "react";

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
    </li>
  );
};