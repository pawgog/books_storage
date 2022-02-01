import React from 'react';
import { Dialog, Button, Typography } from '@mui/material';

function ConfirmModal({ confirmMessage, confirmResultFnc, handleCloseConfirm, isOpen }: any) {
    return (
        <>
            <Dialog open={isOpen} onClose={handleCloseConfirm} className="dialog-modal">
                <Typography variant="h5">{confirmMessage}</Typography>
                <Button onClick={() => confirmResultFnc(true)}>Yes</Button>
                <Button onClick={() => confirmResultFnc(false)}>No</Button>
            </Dialog>
        </>
    );
}

export default ConfirmModal;
