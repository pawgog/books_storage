import React, { useState, useEffect } from 'react';
import { Autocomplete, MenuItem, TextField } from '@mui/material';
import { getBooksSearching } from '../helpers/fetchData';

export interface BookObject {
    id: string;
    book: string;
}

export interface TBookSearch {
    getBookDetails: (book: any) => void;
}

function BookSearch({ getBookDetails }: TBookSearch) {
    const [searchValue, setSearchValue] = useState<string>('');
    const [openSuggestions, setOpenSuggestions] = useState<boolean>(false);
    const [searchBooksAllCollect, setSearchBooksAllCollect] = useState<Array<BookObject>>([{ id: '', book: '' }]);
    const [searchBooksCollect, setSearchBooksCollect] = useState<Array<BookObject>>([{ id: '', book: '' }]);

    useEffect(() => {
        if (searchValue) {
            getBooksSearching(searchValue)
                .then(({ items }) => {
                    setSearchBooksAllCollect(items);
                    const selectItems = items.map(
                        (item: { id: string, volumeInfo: { authors: string, title: string } }) => ({
                            id: item.id,
                            book: `${
                                typeof item.volumeInfo?.authors !== 'undefined'
                                    ? `${item.volumeInfo?.authors[0]} - `
                                    : ''
                            }${item.volumeInfo?.title}`,
                        }),
                    );
                    setOpenSuggestions(true);
                    setSearchBooksCollect(selectItems);
                })
                .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.log(error);
                });
        }
    }, [searchValue]);

    const searchSelected = (selected: any) => {
        setOpenSuggestions(false);
        const selectedBookDetails = searchBooksCollect.find((item) => item.book === selected);
        const bookAllDetails = searchBooksAllCollect.find(
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
                    setOpenSuggestions(true);
                }}
                open={openSuggestions}
                renderOption={(props: any) => (
                    <MenuItem key={props.id} value={props.key} onClick={() => searchSelected(props.key)}>
                        {props.key}
                    </MenuItem>
                )}
                renderInput={(params: any) => <TextField {...params} label="Search books" />}
            />
        </div>
    );
}

export default BookSearch;
