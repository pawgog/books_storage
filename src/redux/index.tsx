import { combineReducers } from 'redux';
import getBooks from './reducers';

const rootReducer = combineReducers({
    booksList: getBooks,
});

export default rootReducer;
