import React from "react";

export default function ProjectListItem(props) {
  return (
    <li>
      <span className="project_name">{props.name}</span>
      <span className="project_description">{props.description}</span>
    </li>
  );
};