import {jobs} from './JobFixtures';

let persistedState;

// Rebuild the redux state by parsing the JSON string in localStorage
if (localStorage.getItem('reduxState')) {
  persistedState = JSON.parse(localStorage.getItem('reduxState'));
  persistedState.selected_job = 
    persistedState.jobs.find(job => job.referenceId === persistedState.selected_job.referenceId) ||
    { title: 'NO JOB SELECTED', stops: [ {address: 'SELECT A JOB TO VIEW STOPS', tasks: [{completed: false}]} ] };
  persistedState.selected_stop = persistedState.selected_job.stops.find(stop => stop.type === persistedState.selected_stop.type);
}

export const INITIAL_STATE = localStorage.getItem('reduxState') ? persistedState :
  {
    jobs: jobs,
    selected_job: { title: 'NO JOB SELECTED', stops: [ {address: 'SELECT A JOB TO VIEW STOPS', tasks: [{completed: false}]} ] },
    selected_stop: {},
    tasks_shown: 'all'
  };

export const update_active_job = (state, job) => {
  state.selected_job = job;
  state.selected_stop = job.stops[0];
  return state;
}

export const update_active_stop = (state, stop) => {
  state.selected_stop = stop;
  return state;
}

export const update_clicked_task = (state, task) => {
  task.completed ? task.completed = false : task.completed = true;
  return state;
}

export const update_task_filter = (state, filter) => {
  state.tasks_shown = filter;
  return state;
}