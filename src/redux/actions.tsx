import { BooksActionTypes } from './types';
import { BookObject } from '../types/interfaces';

export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';

export const getBooksAction = (booksList: Array<BookObject>): BooksActionTypes => ({
    type: GET_BOOKS,
    payload: booksList,
});

export const addBookAction = (payload: any) => ({
    type: ADD_BOOK,
    payload,
});
