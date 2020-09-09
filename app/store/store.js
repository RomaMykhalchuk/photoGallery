import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import photosReducer from "./reducers/photosReducer";

const rootReducer = combineReducers({
  photos: photosReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
