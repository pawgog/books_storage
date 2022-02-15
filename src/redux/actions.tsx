import { BooksActionTypes } from './types';
import { IBookObject } from '../types/interfaces';

export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

export const getBooksAction = (booksList: Array<IBookObject>): BooksActionTypes => ({
    type: GET_BOOKS,
    payload: booksList,
});

export const addBookAction = (payload: IBookObject[]) => ({
    type: ADD_BOOK,
    payload,
});

export const editBookAction = (payload: IBookObject[]) => ({
    type: EDIT_BOOK,
    payload,
});

export const deleteBookAction = (payload: number) => ({
    type: DELETE_BOOK,
    payload,
});
