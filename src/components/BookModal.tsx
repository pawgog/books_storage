import * as React from 'react';
import { Dialog, Button } from '@mui/material';

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
                Open dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <p>Modal content</p>
            </Dialog>
        </div>
    );
}

export default BookModal;
