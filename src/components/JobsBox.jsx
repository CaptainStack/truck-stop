import React from 'react';
import { jobClick } from '../events';

const JobsBox = ({jobs, selected_job}) => {
  let job_elements = jobs.map(job => {
    let classes = '';
    if (jobs === selected_job) {
      classes += 'selected ';
    }

    let incomplete_task = false;
    for (let stop of job.stops) {
      if (stop.tasks.find(task => task.completed === false)) {
        incomplete_task = true;
        break;
      }
    }

    if (!incomplete_task) classes += 'completed';
    return <li onClick={jobClick(job)} className={classes} >{job.title}</li>
  });
  return (
    <div className={'jobs-box'} >
      <h1>Jobs</h1>
      <ul>
        {job_elements}
      </ul>
    </div>
  );
};

export default JobsBox;