import React from 'react';
import JobsBox from './JobsBox';
import StopsBox from './StopsBox';
import TasksBox from './TasksBox';

const ChecklistManager = ({jobs}) => {
  return (
    <div className={'checklist-manager'} >
      <JobsBox jobs={jobs}/>
      <StopsBox />
      <TasksBox />
    </div>
  );
};

export default ChecklistManager;