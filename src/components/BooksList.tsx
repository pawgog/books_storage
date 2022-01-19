import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useSortableData from '../helpers/hooks';
import { IBooksListArray, IBookObject } from '../types/interfaces';

function BooksList({ books }: IBooksListArray) {
    const { booksSorted, requestSort, sortConfig } = useSortableData(books);

    return (
        <TableContainer>
            <Table aria-label="books table">
                <TableHead>
                    <TableRow>
                        <TableCell key="title" className={sortConfig.key === 'title' ? sortConfig.direction : 'asc'}>
                            <button type="button" onClick={() => requestSort('title')}>
                                Title
                            </button>
                        </TableCell>
                        <TableCell key="author" className={sortConfig.key === 'author' ? sortConfig.direction : 'asc'}>
                            <button type="button" onClick={() => requestSort('author')}>
                                Author
                            </button>
                        </TableCell>
                        <TableCell>Publishing House</TableCell>
                        <TableCell>Genre</TableCell>
                        <TableCell>Price</TableCell>
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
                                        // eslint-disable-next-line no-alert
                                        alert('delete item');
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BooksList;
