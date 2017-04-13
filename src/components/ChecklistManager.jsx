import React from 'react';
import Job from './Job';
import { filterClick } from '../events';

const ChecklistManager = ({state}) => {
    let is_job_complete = job => {
    for (let stop of job.stops) {
      for (let task of stop.tasks) {
        if (!task.completed) {
          return false;
        }
      }
    }
    return  true;
  }
  let job_elements = state.jobs.map(job => {
    let job_complete = is_job_complete(job);
    if ((state.tasks_shown === 'completed' && job_complete) ||
        (state.tasks_shown === 'active' && !job_complete) ||
        (state.tasks_shown === 'all')) {
      return <Job job={job} job_complete={job_complete} />
    } else {
      return null;
    }
  });
  
  return (
    <div className={'checklist-manager'} >
      <h2>Showing {state.tasks_shown} jobs</h2>
      <p>
        <button onClick={filterClick('active')} disabled={state.tasks_shown === 'active'}>Active</button>
        <button onClick={filterClick('completed')} disabled={state.tasks_shown === 'completed'}>Completed</button>
        <button onClick={filterClick('all')} disabled={state.tasks_shown === 'all'}>All</button>
      </p>
      {job_elements}
    </div>
  );
};

export default ChecklistManager;