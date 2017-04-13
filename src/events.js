import {store} from './index'

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
