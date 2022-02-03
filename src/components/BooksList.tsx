import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmModal from './ConfirmModal';
import { deleteBookAction } from '../redux/actions';
import useSortableData from '../helpers/hooks';
import { IBooksListArray, IBookObject } from '../types/interfaces';

const staticText = {
    confirmMessage: 'Would you like to delete book item?',
};

function BooksList({ books }: IBooksListArray) {
    const dispatch = useDispatch();
    const [isOpen, setOpenConfirm] = useState(false);
    const [bookIdSelected, selectBook] = useState(0);
    const { booksSorted, requestSort, sortConfig } = useSortableData(books);
    const detectSortDirection = (val: string) =>
        sortConfig !== null && sortConfig.key === val ? sortConfig.direction : 'asc';

    const deleteBook = (bookId: number) => {
        dispatch(deleteBookAction(bookId));
    };

    const confirmFnc = (result: boolean) => {
        if (result) {
            deleteBook(bookIdSelected);
            selectBook(0);
            setOpenConfirm(false);
        }
        selectBook(0);
        setOpenConfirm(false);
    };

    const openConfirm = () => {
        setOpenConfirm(true);
    };

    const closeConfirm = () => {
        setOpenConfirm(false);
    };

    return (
        <TableContainer>
            <Table aria-label="books table">
                <TableHead>
                    <TableRow>
                        <TableCell key="title" className={detectSortDirection('title')}>
                            <button type="button" onClick={() => requestSort('title')}>
                                Title
                            </button>
                        </TableCell>
                        <TableCell key="author" className={detectSortDirection('author')}>
                            <button type="button" onClick={() => requestSort('author')}>
                                Author
                            </button>
                        </TableCell>
                        <TableCell key="publishing" className={detectSortDirection('publishing')}>
                            <button type="button" onClick={() => requestSort('publishing')}>
                                Publishing House
                            </button>
                        </TableCell>
                        <TableCell key="genre" className={detectSortDirection('genre')}>
                            <button type="button" onClick={() => requestSort('genre')}>
                                Genre
                            </button>
                        </TableCell>
                        <TableCell key="price" className={detectSortDirection('price')}>
                            <button type="button" onClick={() => requestSort('price')}>
                                Price
                            </button>
                        </TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {booksSorted.map((book: IBookObject) => (
                        <TableRow key={book.id}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.publishing}</TableCell>
                            <TableCell>{book.genre}</TableCell>
                            <TableCell>{book.price}</TableCell>
                            <TableCell>
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => {
                                        selectBook(book.id);
                                        openConfirm();
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <ConfirmModal
                                    confirmMessage={staticText.confirmMessage}
                                    confirmResultFnc={confirmFnc}
                                    handleCloseConfirm={closeConfirm}
                                    isOpen={isOpen}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BooksList;
