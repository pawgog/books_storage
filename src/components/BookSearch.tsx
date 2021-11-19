import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BooksListArray } from '../types/interfaces';

function BookSearch({ books }: BooksListArray) {
    return (
        <Autocomplete
            freeSolo
            id="books-search"
            options={books.map((option) => option.title)}
            renderInput={(params: any) => <TextField {...params} label="Search books" />}
        />
    );
}

export default BookSearch;
