import { BookObject } from '../types/interfaces';
import { GET_BOOKS, ADD_BOOK } from './actions';

export interface GetBooksPostsStateType {
    booksList: Array<BookObject>;
}

interface GetBooksActionType {
    type: typeof GET_BOOKS;
    payload: Array<BookObject>;
}

interface AddBookActionType {
    type: typeof ADD_BOOK;
    payload: Array<BookObject>;
}

export type BooksActionTypes = GetBooksActionType | AddBookActionType;
