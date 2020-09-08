import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import photosReducer from './reducers/photosReducer';

const rootReducer = combineReducers({
  photos: photosReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;