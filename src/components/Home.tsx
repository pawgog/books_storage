import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../helpers/fetchData';
import { AppState } from '../redux/store';
import BookMenu from './BookMenu';
import BookModal from './BookModal';
import BooksList from './BooksList';
import { BookSchema } from '../types/interfaces';

const bookSchemaInit = { author: '', title: '', publishing: '', genre: '', price: '' };

function Root() {
    const [open, setOpen] = useState(false);
    const [bookDetails, setBookDetails] = useState(bookSchemaInit);

    const dispatch = useDispatch();
    const getBooksCallback = useCallback(() => {
        dispatch(getBooks());
    }, [dispatch]);
    useEffect(() => {
        getBooksCallback();
    }, [getBooksCallback]);

    const booksList = useSelector((state: AppState) => state.booksList);

    const handleBookDetails = (bookSchema: BookSchema): void => {
        setBookDetails(bookSchema);
    };

    const handleOpen = () => {
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
                    bookDetails={bookDetails}
                    handleBookDetails={handleBookDetails}
                    handleCloseModal={handleClose}
                />
                <BooksList books={booksList} />
            </div>
        </>
    );
}

export default Root;
