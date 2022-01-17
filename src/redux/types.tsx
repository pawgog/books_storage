import { IBookObject } from '../types/interfaces';
import { GET_BOOKS, ADD_BOOK } from './actions';

export interface GetBooksPostsStateType {
    booksList: Array<IBookObject>;
}

interface GetBooksActionType {
    type: typeof GET_BOOKS;
    payload: Array<IBookObject>;
}

interface AddBookActionType {
    type: typeof ADD_BOOK;
    payload: Array<IBookObject>;
}

export type BooksActionTypes = GetBooksActionType | AddBookActionType;
