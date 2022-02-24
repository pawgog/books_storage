import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmModal from './ConfirmModal';
import { deleteBookAction } from '../redux/actions';
import useSortableData from '../helpers/hooks';
import { formFieldsData } from '../helpers/staticData';
import { IBooksListArray, IBookObject } from '../types/interfaces';

const staticText = {
    confirmMessage: 'Would you like to delete book item?',
};

export interface ITableCellContent {
    cellName: string;
    detectSortDirection: Function;
    requestSort: Function;
}

const TableCellContent = ({ cellName, detectSortDirection, requestSort }: ITableCellContent) => (
    <TableCell key={cellName} className={detectSortDirection(cellName)}>
        <button type="button" onClick={() => requestSort(cellName)}>
            {cellName}
        </button>
    </TableCell>
);

function BooksList({ books, handleBookEdit }: IBooksListArray) {
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

    const openConfirm = (bookId: number) => {
        selectBook(bookId);
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
                        {formFieldsData.map(({ name }) => (
                            <TableCellContent
                                cellName={name}
                                detectSortDirection={detectSortDirection}
                                requestSort={requestSort}
                            />
                        ))}
                        <TableCell colSpan={2} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {booksSorted.map((book: IBookObject) => (
                        <TableRow key={book.id}>
                            {formFieldsData.map(({ name }) => (
                                <TableCell>{book[name]}</TableCell>
                            ))}
                            <TableCell>
                                <IconButton aria-label="edit" onClick={() => handleBookEdit(book)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton aria-label="delete" onClick={() => openConfirm(book.id)}>
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
