import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmModal from './ConfirmModal';
import { deleteBookAction } from '../redux/actions';
import useSortableData from '../helpers/hooks';
import { formFieldsData } from '../helpers/staticData';
import { IBooksListArray, IBookObject } from '../types/interfaces';

const staticText = {
    confirmMessage: 'Would you like to delete book item?',
    noItems: 'There is no item!',
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

function BooksList({ books, filterValue, handleBookEdit }: IBooksListArray) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
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

    const filterBooksList = booksSorted.filter((item: IBookObject) =>
        item.author.toLowerCase().includes(filterValue.toLowerCase()),
    );

    return (
        <TableContainer>
            <Table aria-label="books table">
                <TableHead>
                    <TableRow>
                        {formFieldsData.map(({ name }) => (
                            <TableCellContent
                                key={name}
                                cellName={t(name)}
                                detectSortDirection={detectSortDirection}
                                requestSort={requestSort}
                            />
                        ))}
                        <TableCell colSpan={2} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filterBooksList.length !== 0 ? (
                        filterBooksList.map((book: IBookObject) => (
                            <TableRow key={book.id}>
                                {formFieldsData.map(({ name }) => (
                                    <TableCell key={name}>{book[name]}</TableCell>
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
                                        confirmMessage={t(staticText.confirmMessage)}
                                        confirmResultFnc={confirmFnc}
                                        handleCloseConfirm={closeConfirm}
                                        isOpen={isOpen}
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6}>
                                <Typography variant="h6">{t(staticText.noItems)}</Typography>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BooksList;
