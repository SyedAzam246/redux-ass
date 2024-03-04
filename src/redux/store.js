// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // If you're using Redux Thunk middleware
import rootReducer from './reducers';

// Create Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
