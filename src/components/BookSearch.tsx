import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, IconButton } from '@mui/material';
import ManageSearch from '@mui/icons-material/ManageSearch';
import { getBooksFetching } from '../helpers/fetchData';

export interface BookObject {
    id: string;
    book: string;
}

function BookSearch({ getBookDetails }: any) {
    const [searchValue, setSearchValue] = useState('');
    const [searchBooksAllCollect, setSearchBooksAllCollect] = useState<any>([{}]);
    const [searchBooksCollect, setSearchBooksCollect] = useState<Array<BookObject>>([{ id: '', book: '' }]);

    useEffect(() => {
        getBooksFetching(searchValue)
            .then(({ items }) => {
                setSearchBooksAllCollect(items);
                const selectItems = items.map(
                    (item: { id: string, volumeInfo: { authors: string, title: string } }) => ({
                        id: item.id,
                        book: `${item.volumeInfo?.authors[0]} - ${item.volumeInfo.title}`,
                    }),
                );
                setSearchBooksCollect(selectItems);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    }, [searchValue]);

    const searchSelected = (selected: any) => {
        const selectedBookDetails = searchBooksCollect.find((item) => item.book === selected.value);
        const bookAllDetails = searchBooksAllCollect?.find(
            (book: { id: string }) => book.id === selectedBookDetails?.id,
        );
        getBookDetails(bookAllDetails);
        // eslint-disable-next-line no-console
        console.log('selected', selectedBookDetails, bookAllDetails);
    };

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
                onSelect={(event) => searchSelected(event.target)}
                renderInput={(params: any) => <TextField {...params} label="Search books" />}
            />
            <IconButton aria-label="search" color="primary">
                <ManageSearch />
            </IconButton>
        </div>
    );
}

export default BookSearch;
