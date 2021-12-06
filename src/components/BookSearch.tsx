import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, IconButton } from '@mui/material';
import ManageSearch from '@mui/icons-material/ManageSearch';
import { getBooksFetching } from '../helpers/fetchData';

export interface BookObject {
    id: string;
    book: string;
}

function BookSearch() {
    const [searchValue, setSearchValue] = useState('');
    const [searchBooksCollect, setSearchBooksCollect] = useState<Array<BookObject>>([{ id: '', book: '' }]);

    useEffect(() => {
        getBooksFetching(searchValue)
            .then(({ items }) => {
                const selectItems = items.map(
                    (item: { id: string, volumeInfo: { authors: string, title: string } }) => ({
                        id: item.id,
                        book: `${item.volumeInfo.authors[0]} - ${item.volumeInfo.title}`,
                    }),
                );
                setSearchBooksCollect(selectItems);
            })
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
                options={searchBooksCollect.map((option) => option.book)}
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