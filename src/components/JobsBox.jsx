import React from 'react';
import { jobClick, filterClick } from '../events';

const JobsBox = ({jobs, selected_job, tasks_shown}) => {
  let job_is_complete = job => {
    for (let stop of job.stops) {
      for (let task of stop.tasks) {
        if (!task.completed) {
          return false;
        }
      }
    }
    return  true;
  }
  if (tasks_shown === 'completed') {
    jobs = jobs.filter(job => job_is_complete(job));
  } else if (tasks_shown === 'active') {
    jobs = jobs.filter(job => !job_is_complete(job));
  }
  let job_elements = jobs.map(job => {
    let classes = '';
    if (job === selected_job) {
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
      <button onClick={filterClick('active')} disabled={tasks_shown === 'active'}>Active</button>
      <button onClick={filterClick('completed')} disabled={tasks_shown === 'completed'}>Completed</button>
      <button onClick={filterClick('all')} disabled={tasks_shown === 'all'}>All</button>
      <ul>
        {job_elements}
      </ul>
    </div>
  );
};

export default JobsBox;