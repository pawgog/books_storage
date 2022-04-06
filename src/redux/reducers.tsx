import { GET_BOOKS, ADD_BOOK, EDIT_BOOK, DELETE_BOOK, SELECT_LANG } from './actions';
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
    lang: 'eng',
};

const books = (state = initialStateGetPosts, action: BooksActionTypes): any => {
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
                booksList: [
                    ...state.booksList.map((item: IBookObject) =>
                        item.id === action.payload[0].id ? action.payload[0] : item,
                    ),
                ],
            };
        case DELETE_BOOK:
            return {
                ...state,
                booksList: [...state.booksList.filter((item: IBookObject) => item.id !== Number(action.payload))],
            };
        case SELECT_LANG:
            return {
                ...state,
                lang: action.payload,
            };
        default:
            return state;
    }
};

export default books;
