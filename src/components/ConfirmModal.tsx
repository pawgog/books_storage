import React from 'react';
import { Dialog, Button, Typography } from '@mui/material';
import { BooksFormModalContentStyled } from '../styles/BookModal.styled';

interface ConfirmModalType {
    confirmMessage: string;
    confirmResultFnc: Function;
    handleCloseConfirm: React.MouseEventHandler<HTMLButtonElement>;
    isOpen: boolean;
}

function ConfirmModal({ confirmMessage, confirmResultFnc, handleCloseConfirm, isOpen }: ConfirmModalType) {
    return (
        <>
            <Dialog open={isOpen} onClose={handleCloseConfirm} className="dialog-modal">
                <Typography variant="h5">{confirmMessage}</Typography>
                <BooksFormModalContentStyled>
                    <Button variant="outlined" onClick={() => confirmResultFnc(true)}>
                        Yes
                    </Button>
                    <Button variant="outlined" onClick={() => confirmResultFnc(false)}>
                        No
                    </Button>
                </BooksFormModalContentStyled>
            </Dialog>
        </>
    );
}

export default ConfirmModal;
