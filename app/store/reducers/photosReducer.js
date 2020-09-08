import { LOAD_DATA } from '../actionTypes';

export const setPhotos = (data) => ({type: LOAD_DATA, photos: data});

const reducer = (photos = [], action) => {
  switch(action.type) {
    case LOAD_DATA:
      return action.photos;
    default:
      return photos;
  }
};

export default reducer;