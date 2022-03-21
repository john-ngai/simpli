import React from "react";
import ProjectListItem from "./ProjectListItem";
import { Link } from 'react-router-dom';

export default function ProjectList(props) {
  const listItem = props.projects.map(project =>
    <ProjectListItem
      key={project.id}
      name={project.name}
      description={project.description}
      count={project.count}
      selected={project.id === props.value}
      setProject={() => {
        props.onChange(project.id);
        props.transition('DELIVERABLES');
      }}
      deleteProject={() => {
        props.deleteProject(props.value);
      }}
    />
  );

  return (
    <div>
      <span className="nav-tab">
        <Link to="/projects/new">New Project</Link>
      </span>
      <ul className="project_item_list">
        {listItem}
      </ul>
    </div>
  );
}
