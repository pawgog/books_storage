import React, { useState } from 'react';
import { Dialog, Button } from '@mui/material';
import { BooksListArray } from '../types/interfaces';
import BookForm from './BookForm';
import BookSearch from './BookSearch';

function BookModal({ books }: BooksListArray) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add book
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <BookSearch books={books} />
                <BookForm handleClose={handleClose} />
            </Dialog>
        </>
    );
}

export default BookModal;
