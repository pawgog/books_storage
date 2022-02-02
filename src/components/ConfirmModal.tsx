import React from 'react';
import { Dialog, Button, Typography } from '@mui/material';

function ConfirmModal({ confirmMessage, confirmResultFnc, handleCloseConfirm, isOpen }: any) {
    return (
        <>
            <Dialog open={isOpen} onClose={handleCloseConfirm} className="dialog-modal">
                <Typography variant="h5">{confirmMessage}</Typography>
                <div className="confirm-modal__content">
                    <Button variant="outlined" onClick={() => confirmResultFnc(true)}>
                        Yes
                    </Button>
                    <Button variant="outlined" onClick={() => confirmResultFnc(false)}>
                        No
                    </Button>
                </div>
            </Dialog>
        </>
    );
}

export default ConfirmModal;
