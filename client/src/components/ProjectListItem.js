import React from "react";
import classNames from 'classnames';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ProjectListItem.scss';
import CircularProgressWithLabel from "./MUI/CircularProgressWithLabel";
// import { CircularProgress, Box, Typography } from "@mui/material";

// function CircularProgressWithLabel(props) {
//   return (
//     <div>
//       <Box sx={{position: 'absolute' }}>
//         <CircularProgress variant="determinate" value={props.percentComplete} {...props} />
//         <Box
//           sx={{
//             top: 0,
//             left: 0,
//             bottom: 0,
//             right: 0,
//             position: 'absolute',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <Typography variant="caption" >
//             {`${props.percentComplete}%`}
//           </Typography>
//         </Box>
//       </Box>
//     </div>
//   )
// }

export default function ProjectListItem(props) {
  const projectClass = classNames('project_list_item', {
    'project_list_item--selected': props.selected
  });
  return (
    <li className={projectClass} onClick={props.setProject}>
      <span className="project_name">{props.name}</span>
      <span className="project_description">{props.description}</span>
      <span className="project_deliverables">{props.count} Deliverables</span>
      {/* {props.count > 0 ? <aside>Percent Complete: {props.percentComplete}%</aside> : <aside>No Deliverables Yet! </aside>} */}
      {/* <CircularProgress label={props.percentComplete} variant="determinate" value={props.percentComplete}/> */}
      {/* <CircularProgressWithLabel value={props.percentComplete}/> */}
      {/* { props.count > 0 ? CircularProgressWithLabel(props) : "Not started" } */}
      { props.count > 0 ? <CircularProgressWithLabel value={props.percentComplete}/> : <CircularProgressWithLabel value={0}/> }
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