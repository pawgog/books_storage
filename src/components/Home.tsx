import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../helpers/fetchData';
import { AppState } from '../redux/store';
import BookMenu from './BookMenu';
import BookModal from './BookModal';
import BooksList from './BooksList';
import { bookSchemaInit } from '../helpers/staticData';
import { IBookObject } from '../types/interfaces';

function Home() {
    const [open, setOpen] = useState(false);
    const [bookDetails, setBookDetails] = useState(bookSchemaInit);
    const [isEditForm, setEditForm] = useState(false);

    const dispatch = useDispatch();
    const getBooksCallback = useCallback(() => {
        dispatch(getBooks());
    }, [dispatch]);
    useEffect(() => {
        getBooksCallback();
    }, [getBooksCallback]);

    const booksList = useSelector((state: AppState) => state.booksList);

    const handleBookDetails = (bookSchema: IBookObject): void => {
        setBookDetails(bookSchema);
    };

    const handleBookEdit = (book: IBookObject) => {
        setEditForm(true);
        setOpen(true);
        handleBookDetails(book);
    };

    const handleOpen = () => {
        setEditForm(false);
        setOpen(true);
        handleBookDetails(bookSchemaInit);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // eslint-disable-next-line no-console
    console.log('books', booksList);

    return (
        <>
            <BookMenu handleOpenModal={handleOpen} />
            <div className="books-dashboard-body">
                <BookModal
                    open={open}
                    isEditForm={isEditForm}
                    bookDetails={bookDetails}
                    handleBookDetails={handleBookDetails}
                    handleCloseModal={handleClose}
                />
                <BooksList books={booksList} handleBookEdit={handleBookEdit} />
            </div>
        </>
    );
}

export default Home;
