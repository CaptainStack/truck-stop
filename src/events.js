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
  navigator.geolocation.getCurrentPosition(position => {
    store.dispatch({ type: 'UPDATE_SELECTED_TASK', task: clicked_task, GPS: { latitude: position.coords.latitude, longitude: position.coords.longitude} });
  });
}

export const filterClick = clicked_filter => e => {
  store.dispatch({ type: 'UPDATE_FILTER', filter: clicked_filter });
}

export const saveImage = (task, image) => {
  store.dispatch({ type: 'ADD_IMAGE_TO_TASK', task: task, image: image });
}
