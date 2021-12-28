import React, { useState } from 'react';
import { Dialog, Button } from '@mui/material';
import BookForm from './BookForm';
import BookSearch from './BookSearch';

const bookSchema = { author: '', title: '', publishing: '', genre: '', price: '' };

function BookModal() {
    const [open, setOpen] = useState(false);
    const [bookDetails, setBookDetails] = useState(bookSchema);

    const handleClickOpen = () => {
        setOpen(true);
        setBookDetails(bookSchema);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getBookDetails = (book: any) => {
        const objectBook = {
            author: book.volumeInfo?.authors ? book.volumeInfo?.authors[0] : '',
            title: book.volumeInfo?.title || '',
            publishing: book.volumeInfo?.publisher || '',
            genre: book.volumeInfo?.categories ? book.volumeInfo?.categories[0] : '',
            price: '',
        };
        setBookDetails(objectBook);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add book
            </Button>
            <Dialog open={open} onClose={handleClose} className="Dialog-modal">
                <BookSearch getBookDetails={getBookDetails} />
                <BookForm bookDetails={bookDetails} handleClose={handleClose} />
            </Dialog>
        </>
    );
}

export default BookModal;
