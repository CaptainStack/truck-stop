import {update_active_job, update_active_stop, update_clicked_task, update_task_filter, add_image_to_task, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_SELECTED_JOB':
      return update_active_job(state, action.job);
    case 'UPDATE_SELECTED_STOP':
      return update_active_stop(state, action.stop);
    case 'UPDATE_SELECTED_TASK':
      return update_clicked_task(state, action.task, action.GPS);
    case 'UPDATE_FILTER':
      return update_task_filter(state, action.filter);
    case 'ADD_IMAGE_TO_TASK':
      return add_image_to_task(state, action.task, action.image);
    default:
      return state;
  }
}
