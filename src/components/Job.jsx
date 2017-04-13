import React from 'react';
import Stop from './Stop';
import '../styles/Job.css';

const Job = ({job, job_complete}) => {
  let job_status = job_complete ? 'Completed' : 'Active';
  let stops = job.stops.map(stop => {
    return <Stop stop={stop}/>
  });
  return (
    <div>
      <table className={job_complete ? 'complete-job' : 'active-job'}>
        <tbody>
          <tr><td colSpan={6}><h3>{job.title} (Reference ID: {job.referenceId})</h3></td><td>{job_status}</td></tr>
          <tr><td>Type</td><td>Address</td><td>Cargo Description</td><td>Arrival Deadline</td><td colSpan={2}>Tasks</td><td>Status</td></tr>
          {stops}
        </tbody>
      </table>
      <br/>
    </div>
  );
};

export default Job;