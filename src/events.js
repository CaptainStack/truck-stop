import {store} from './index'

export const jobClick = clicked_job => e => {
  if (clicked_job !== store.getState().selected_job) {
    store.dispatch({ type: 'UPDATE_SELECTED_JOB', job: clicked_job });
  }
}

export const stopClick = clicked_stop => e => {
  if (clicked_stop !== store.getState().selected_stop) {
    store.dispatch({ type: 'UPDATE_SELECTED_STOP', stop: clicked_stop });
  }
}

export const taskClick = clicked_task => e => {
  store.dispatch({ type: 'UPDATE_SELECTED_TASK', task: clicked_task });
}

export const filterClick = clicked_filter => e => {
  store.dispatch({ type: 'UPDATE_FILTER', filter: clicked_filter });
}
