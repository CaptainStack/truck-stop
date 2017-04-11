import {store} from './index'

export const jobClick = clicked_job => e => {
  store.dispatch({ type: 'UPDATE_SELECTED_JOB', job: clicked_job });
  // window.localStorage.setItem('appState', store.getState());
}

export const stopClick = clicked_stop => e => {
  store.dispatch({ type: 'UPDATE_SELECTED_STOP', stop: clicked_stop });
  // window.localStorage.setItem('appState', store.getState());
}
