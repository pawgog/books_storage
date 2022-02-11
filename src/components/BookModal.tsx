import React from 'react';
import { Dialog } from '@mui/material';
import BookForm from './BookForm';
import BookSearch from './BookSearch';
import { IBookSchema, IBookObjectAPI } from '../types/interfaces';

interface BookModalType {
    open: boolean;
    isEditForm: boolean;
    bookDetails: IBookSchema;
    handleBookDetails: Function;
    handleCloseModal: React.MouseEventHandler<HTMLButtonElement>;
}

function BookModal({ open, isEditForm, bookDetails, handleBookDetails, handleCloseModal }: BookModalType) {
    const getBookDetails = (book: IBookObjectAPI) => {
        const objectBook: IBookSchema = {
            author: book.volumeInfo?.authors ? book.volumeInfo?.authors[0] : '',
            title: book.volumeInfo?.title || '',
            publishing: book.volumeInfo?.publisher || '',
            genre: book.volumeInfo?.categories ? book.volumeInfo?.categories[0] : '',
            price: 0,
        };
        handleBookDetails(objectBook);
    };

    return (
        <>
            <Dialog open={open} onClose={handleCloseModal} className="dialog-modal">
                <BookSearch getBookDetails={getBookDetails} />
                <BookForm bookDetails={bookDetails} handleClose={handleCloseModal} isEditForm={isEditForm} />
            </Dialog>
        </>
    );
}

export default BookModal;
