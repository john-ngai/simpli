import React from "react";
import ProjectListItem from "./ProjectListItem";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './ProjectList.scss';
import { Link } from 'react-router-dom';
import useAppData from "../hooks/useAppData";

export default function ProjectList(props) {
  const { state, percentComplete } = useAppData();
  const listItem = props.projects.map(project =>
    <ProjectListItem
      key={project.id}
      name={project.name}
      description={project.description}
      count={project.count}
      selected={project.id === props.value}
      completed_deliverables={project['completed_deliverables']}
      total_deliverables={project['total_deliverables']}
      percentComplete={percentComplete(state, project.id)}
      completedDeliverables={props.completedDeliverables(state, project.id)}
      setProject={() => {
        props.onChange(project.id);
        props.transition('DELIVERABLES');
      }}
      editProject={event => {
        event.stopPropagation();
        props.transition('EDIT_PROJECT');
      }}
      deleteProject={event => {
        event.stopPropagation();
        props.deleteProject(props.value);
        props.transition(null);
      }}
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
