import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ManageSearch from '@mui/icons-material/ManageSearch';
import { BooksListArray } from '../types/interfaces';
import { getBooksFetching } from '../helpers/fetchData';

function BookSearch({ books }: BooksListArray) {
    const [searchValue, setSearchValue] = useState('');
    const [searchBooksCollect, setSearchBooksCollect] = useState<Array<string>>(['']);

    useEffect(() => {
        getBooksFetching(searchValue)
            .then(({ items }) => setSearchBooksCollect(items))
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    }, [searchValue]);

    // eslint-disable-next-line no-console
    console.log('searchBooksCollect', searchBooksCollect);

    return (
        <Paper elevation={0} className="Paper-search">
            <Autocomplete
                freeSolo
                id="books-search"
                options={books.map((option) => option.title)}
                onInputChange={(e, inputValue) => {
                    setSearchValue(inputValue);
                }}
                renderInput={(params: any) => <TextField {...params} label="Search books" />}
            />
            <IconButton aria-label="search" color="primary">
                <ManageSearch />
            </IconButton>
        </Paper>
    );
}

export default BookSearch;
