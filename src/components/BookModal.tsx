import React from 'react';
import BookForm from './BookForm';
import BookSearch from './BookSearch';
import { BooksModalStyled } from '../styles/BookModal.styled';
import { IBookObject, IBookObjectAPI } from '../types/interfaces';

interface BookModalType {
    open: boolean;
    isEditForm: boolean;
    bookDetails: IBookObject;
    handleBookDetails: Function;
    handleCloseModal: React.MouseEventHandler<HTMLButtonElement>;
}

function BookModal({ open, isEditForm, bookDetails, handleBookDetails, handleCloseModal }: BookModalType) {
    const getBookDetails = (book: IBookObjectAPI) => {
        const objectBook: IBookObject = {
            id: 0,
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
            <BooksModalStyled open={open} onClose={handleCloseModal}>
                <BookSearch getBookDetails={getBookDetails} />
                <BookForm bookDetails={bookDetails} handleClose={handleCloseModal} isEditForm={isEditForm} />
            </BooksModalStyled>
        </>
    );
}

export default BookModal;
