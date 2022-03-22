import React from "react";
import ProjectListItem from "./ProjectListItem";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './ProjectList.scss';

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
    <aside id="projects_list">
      <AddCircleIcon id="new_project" className="mui_icons"
        onClick={() => props.transition('NEW_PROJECT')}
      />
      {listItem}
    </aside>
  );
}
