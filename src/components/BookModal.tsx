import * as React from 'react';
import { Dialog, Button } from '@mui/material';
import BookForm from './BookForm';

function BookModal() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add book
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <BookForm />
            </Dialog>
        </div>
    );
}

export default BookModal;
