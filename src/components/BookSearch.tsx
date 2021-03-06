import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Autocomplete, MenuItem, TextField } from '@mui/material';
import BooksSearchStyled from '../styles/BookSearch.styled';
import { getBooksSearching } from '../helpers/fetchData';

export interface BookObject {
    id: string;
    book: string;
}

export interface TBookSearch {
    getBookDetails: (book: any) => void;
}

function BookSearch({ getBookDetails }: TBookSearch) {
    const { t } = useTranslation();
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

    const handleInputChange = (e: SyntheticEvent<Element, Event>, inputValue: string) => {
        setSearchValue(inputValue);
        setOpenSuggestions(true);
    };

    // eslint-disable-next-line no-console
    console.log('searchBooksCollect', searchBooksCollect);

    return (
        <BooksSearchStyled>
            <Autocomplete
                freeSolo
                id="books-search"
                options={searchBooksCollect.map((option) => option.book)}
                onInputChange={handleInputChange}
                open={openSuggestions}
                renderOption={(props: any) => (
                    <MenuItem key={props.id} value={props.key} onClick={() => searchSelected(props.key)}>
                        {props.key}
                    </MenuItem>
                )}
                renderInput={(params: any) => <TextField {...params} label={t('Search books')} />}
            />
        </BooksSearchStyled>
    );
}

export default BookSearch;
