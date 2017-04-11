import React from 'react';

const JobsBox = ({jobs}) => {
  let job_elements = jobs.map(job => <li>{job.title}</li>);
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