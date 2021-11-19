import { GET_BOOKS, PostActionTypes } from './types';
import { BookObject } from '../types/interfaces';

const getBooksAction = (booksList: Array<BookObject>): PostActionTypes => ({
    type: GET_BOOKS,
    payload: booksList,
});

export default getBooksAction;
