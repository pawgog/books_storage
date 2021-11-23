import { Dispatch } from 'redux';
import getBooksAction from '../redux/actions';
import { PostActionTypes } from '../redux/types';

const booksList = [
    {
        id: 1,
        title: 'Billy Summers',
        author: 'Stephen King',
        publishing: 'Prószyński i S-ka',
        genre: 'thriller',
        price: 40,
    },
    {
        id: 2,
        title: 'Nie mów nikomu',
        author: 'Harlan Coben',
        publishing: 'Albatros',
        genre: 'thriller',
        price: 20,
    },
    {
        id: 3,
        title: 'Europa. Rozprawa historyka z historią',
        author: 'Norman Davies',
        publishing: 'Znak',
        genre: 'historia',
        price: 50,
    },
];

function fetchBooks(): Promise<any> {
    return new Promise((resolve, reject) => {
        if (!booksList) {
            return setTimeout(() => reject(new Error('Books not found')), 250);
        }
        return setTimeout(() => resolve(Object.values([...booksList])), 250);
    });
}

export const getBooks = () => (dispatch: Dispatch<PostActionTypes>) =>
    fetchBooks().then((data) => {
        dispatch(getBooksAction(data));
    });

export const getBooksFetching = (searchValue: string) =>
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
        .then((response: any) => response.json())
        .then((data) => data)
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
        });
