import React from "react";
import classNames from 'classnames';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ProjectListItem.scss';
import LinearProgressWithLabel from "./MUI/LinearProgress";
import useAppData from "../hooks/useAppData";

export default function ProjectListItem(props) {
  const { state, completedDeliverables } = useAppData();
  const projectClass = classNames('project_list_item', {
    'project_list_item--selected': props.selected
  });

  return (
    <li className={projectClass} onClick={props.setProject}>
      <span className="project_name">{props.name}</span>
      <span className="project_description">{props.description}</span>
      <span className="project_deliverables">{props.count} Deliverables</span>

      {props.count > 0 ? <LinearProgressWithLabel className="project_progress"
        value={Math.round((props['completed_deliverables'] / props.count) * 100)} /> : <LinearProgressWithLabel className="project_progress" value={0} />}


      {props.selected &&
        <span className="project_edit">
          <EditIcon id="edit_project" className="mui_icons"
            onClick={props.editProject}
          />
          <DeleteIcon id="delete_project" className="mui_icons"
            onClick={props.deleteProject}
          />
        </span>
      }
    </li>
  );
};  