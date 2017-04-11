import React from 'react';
import { jobClick } from '../events';

const JobsBox = ({jobs, selected_job}) => {
  let job_elements = jobs.map(job => <li onClick={jobClick(job)} className={job === selected_job ? 'selected' : null} >{job.title}</li>);
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