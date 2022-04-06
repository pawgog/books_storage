import { IBookObject } from '../types/interfaces';
import { GET_BOOKS, ADD_BOOK, EDIT_BOOK, DELETE_BOOK, SELECT_LANG } from './actions';

export interface GetBooksPostsStateType {
    booksList: Array<IBookObject>;
    lang: string;
}

interface GetBooksActionType {
    type: typeof GET_BOOKS;
    payload: Array<IBookObject>;
}

interface AddBookActionType {
    type: typeof ADD_BOOK;
    payload: Array<IBookObject>;
}

interface EditBookActionType {
    type: typeof EDIT_BOOK;
    payload: Array<IBookObject>;
}

interface DeleteBookActionType {
    type: typeof DELETE_BOOK;
    payload: string;
}

interface SelectLangActionType {
    type: typeof SELECT_LANG;
    payload: string;
}

export type BooksActionTypes =
    | GetBooksActionType
    | AddBookActionType
    | EditBookActionType
    | DeleteBookActionType
    | SelectLangActionType;
