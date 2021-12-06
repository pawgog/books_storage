import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, IconButton } from '@mui/material';
import ManageSearch from '@mui/icons-material/ManageSearch';
import { getBooksFetching } from '../helpers/fetchData';

function BookSearch() {
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
        <div className="books-search">
            <Autocomplete
                freeSolo
                id="books-search"
                onInputChange={(e, inputValue) => {
                    setSearchValue(inputValue);
                }}
                renderInput={(params: any) => <TextField {...params} label="Search books" />}
            />
            <IconButton aria-label="search" color="primary">
                <ManageSearch />
            </IconButton>
        </div>
    );
}

export default BookSearch;
