import React from 'react';
import { AppBar, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledBox, StyledToolbar } from '../styles/BookMenu.styled';

interface BookMenuType {
    handleOpenModal: React.MouseEventHandler<HTMLButtonElement>;
    filterBooksTable: (value: string) => void;
    filterValue: string;
}

function BookMenu({ handleOpenModal, filterBooksTable, filterValue }: BookMenuType) {
    return (
        <StyledBox>
            <AppBar position="static">
                <StyledToolbar>
                    <Button color="inherit" variant="outlined" onClick={handleOpenModal}>
                        Add book
                    </Button>
                    <TextField
                        id="findAuthor"
                        variant="standard"
                        onChange={(e) => filterBooksTable(e.target.value)}
                        value={filterValue}
                        InputProps={{
                            startAdornment: <SearchIcon />,
                        }}
                    />
                </StyledToolbar>
            </AppBar>
        </StyledBox>
    );
}

export default BookMenu;
