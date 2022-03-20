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
        count={project.count}
        selected={project.name === props.value}
        setProject={props.onChange}
        transition={props.onClick}
      />
    )
  })

  return (
    <ul className="project_item_list">
      {projectInfo}
    </ul>
  )
}