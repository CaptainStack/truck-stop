import React from 'react';
import JobsBox from './JobsBox';
import StopsBox from './StopsBox';
import TasksBox from './TasksBox';

const ChecklistManager = () => {
  return (
    <div className={'checklist-manager'} >
      <JobsBox />
      <StopsBox />
      <TasksBox />
    </div>
  );
};

export default ChecklistManager;