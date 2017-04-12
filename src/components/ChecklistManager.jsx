import React from 'react';
import JobsBox from './JobsBox';
import StopsBox from './StopsBox';
import TasksBox from './TasksBox';

const ChecklistManager = ({state}) => {
  return (
    <div className={'checklist-manager'} >
      <JobsBox jobs={state.jobs} selected_job={state.selected_job} tasks_shown={state.tasks_shown} />
      <StopsBox stops={state.selected_job.stops} selected_stop={state.selected_stop} />
      <TasksBox stop={state.selected_stop} />
    </div>
  );
};

export default ChecklistManager;