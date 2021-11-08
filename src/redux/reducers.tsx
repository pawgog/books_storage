import { GET_BOOKS, GetBooksPostsStateType, PostActionTypes } from './types';

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

const getBooks = (state = initialStateGetPosts, action: PostActionTypes): GetBooksPostsStateType => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                booksList: action.payload,
            };
        default:
            return state;
    }
};

export default getBooks;
