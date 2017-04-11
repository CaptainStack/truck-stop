import React from 'react';
import JobsBox from './JobsBox';
import StopsBox from './StopsBox';
import TasksBox from './TasksBox';
import { jobs } from '../JobFixtures';

const ChecklistManager = () => {
  return (
    <div className={'checklist-manager'} >
      <JobsBox jobs={ jobs }/>
      <StopsBox />
      <TasksBox />
    </div>
  );
};

export default ChecklistManager;