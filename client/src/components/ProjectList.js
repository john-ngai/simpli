import React from "react";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList(props) {
  const projectInfo = props.projects.map(project => {
    return (
      <ProjectListItem 
        key={project.id}
        id={project.id}
        name={project.name}
        description={project.description}
        selected={project.id === props.value}
        setProject={() => {
          props.onChange(project.id);
          props.transition('DELIVERABLES');
        }}
        getSelectedProject={props.getSelectedProject}
      />
    )
  })

  return (
    <ul className="project_item_list">
      {projectInfo}
    </ul>
  )
}