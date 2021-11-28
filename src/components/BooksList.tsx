import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BooksListArray, BookObject } from '../types/interfaces';

function BooksList({ books }: BooksListArray) {
    return (
        <TableContainer>
            <Table aria-label="books table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Publishing House</TableCell>
                        <TableCell>Genre</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((book: BookObject) => (
                        <TableRow key={book.id}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.publishing}</TableCell>
                            <TableCell>{book.genre}</TableCell>
                            <TableCell>{book.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BooksList;
