import React from "react";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList(props) {
  const listItem = props.projects.map(project =>
    <ProjectListItem
      key={project.id}
      name={project.name}
      description={project.description}
      selected={project.id === props.value}
      setProject={() => {
        props.onChange(project.id);
        props.transition('DELIVERABLES');
      }}

      editProject={() => {
        console.log('hello');
        props.transition('EDIT_PROJECT');
      }}

      deleteProject={() => props.deleteProject(props.value)}
    />
  );

  return (
    <ul className="project_item_list">
      {listItem}
    </ul>
  );
}
