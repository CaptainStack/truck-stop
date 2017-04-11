import {update_active_job, update_active_stop, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_SELECTED_JOB':
      return update_active_job(state, action.job);
    case 'UPDATE_SELECTED_STOP':
      return update_active_stop(state, action.stop);
    default:
      return state;
  }
}