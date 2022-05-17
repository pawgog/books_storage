import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@mui/material';
import { BooksModalStyled, BooksFormModalContentStyled } from '../styles/BookModal.styled';

interface ConfirmModalType {
    confirmMessage: string;
    confirmResultFnc: Function;
    handleCloseConfirm: React.MouseEventHandler<HTMLButtonElement>;
    isOpen: boolean;
}

function ConfirmModal({ confirmMessage, confirmResultFnc, handleCloseConfirm, isOpen }: ConfirmModalType) {
    const { t } = useTranslation();

    return (
        <>
            <BooksModalStyled open={isOpen} onClose={handleCloseConfirm}>
                <Typography variant="h5">{confirmMessage}</Typography>
                <BooksFormModalContentStyled>
                    <Button variant="outlined" onClick={() => confirmResultFnc(true)}>
                        {t('yes')}
                    </Button>
                    <Button variant="outlined" onClick={() => confirmResultFnc(false)}>
                        {t('no')}
                    </Button>
                </BooksFormModalContentStyled>
            </BooksModalStyled>
        </>
    );
}

export default ConfirmModal;
