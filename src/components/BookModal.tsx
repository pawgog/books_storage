import React from 'react';
import { Dialog } from '@mui/material';
import BookForm from './BookForm';
import BookSearch from './BookSearch';
import { BookSchema } from '../types/interfaces';

interface BookModalType {
    open: boolean;
    bookDetails: BookSchema;
    handleBookDetails: any;
    handleCloseModal: React.MouseEventHandler<HTMLButtonElement>;
}
function BookModal({ open, bookDetails, handleBookDetails, handleCloseModal }: BookModalType) {
    const getBookDetails = (book: any) => {
        const objectBook: BookSchema = {
            author: book.volumeInfo?.authors ? book.volumeInfo?.authors[0] : '',
            title: book.volumeInfo?.title || '',
            publishing: book.volumeInfo?.publisher || '',
            genre: book.volumeInfo?.categories ? book.volumeInfo?.categories[0] : '',
            price: '',
        };
        handleBookDetails(objectBook);
    };

    return (
        <>
            <Dialog open={open} onClose={handleCloseModal} className="Dialog-modal">
                <BookSearch getBookDetails={getBookDetails} />
                <BookForm bookDetails={bookDetails} handleClose={handleCloseModal} />
            </Dialog>
        </>
    );
}

export default BookModal;
