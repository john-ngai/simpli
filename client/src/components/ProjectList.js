import React from "react";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList(props) {
  const projectInfo = props.projects.map(project => {
    return (
      <ProjectListItem 
        key={project.id}
        name={project.name}
        description={project.description}
      />
    )
  })

  return (
    <ul className="project_item_list">
      {projectInfo}
    </ul>
  )
}