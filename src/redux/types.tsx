import { BookObject } from './interfaces';

export const GET_BOOKS = 'GET_BOOKS';

export interface GetBooksPostsStateType {
    booksList: Array<BookObject>;
}

interface GetBooksPostsActionType {
    type: typeof GET_BOOKS;
    payload: Array<BookObject>;
}

export type PostActionTypes = GetBooksPostsActionType;
