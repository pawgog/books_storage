import { GET_BOOKS, ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from './actions';
import { GetBooksPostsStateType, BooksActionTypes } from './types';
import { IBookObject } from '../types/interfaces';

const initialStateGetPosts: GetBooksPostsStateType = {
    booksList: [
        {
            id: 1,
            title: '',
            author: '',
            publishing: '',
            genre: '',
            price: 0,
        },
    ],
};

const books = (state = initialStateGetPosts, action: BooksActionTypes): GetBooksPostsStateType => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                booksList: action.payload,
            };
        case ADD_BOOK:
            return {
                ...state,
                booksList: [...state.booksList, ...action.payload],
            };
        case EDIT_BOOK:
            return {
                ...state,
                booksList: [...state.booksList, ...action.payload],
            };
        case DELETE_BOOK:
            return {
                ...state,
                booksList: [...state.booksList.filter((item: IBookObject) => item.id !== Number(action.payload))],
            };
        default:
            return state;
    }
};

export default books;
