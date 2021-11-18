import React, { useState } from 'react';
import { Dialog, Button } from '@mui/material';
import BookForm from './BookForm';

function BookModal() {
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
                <BookForm handleClose={handleClose} />
            </Dialog>
        </>
    );
}

export default BookModal;
