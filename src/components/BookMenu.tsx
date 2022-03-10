import React from 'react';
import { AppBar, Box, Toolbar, TextField, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

interface BookMenuType {
    handleOpenModal: React.MouseEventHandler<HTMLButtonElement>;
    filterBooksTable: (value: string) => void;
    filterValue: string;
}

function BookMenu({ handleOpenModal, filterBooksTable, filterValue }: BookMenuType) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <TextField
                        id="findAuthor"
                        variant="standard"
                        onChange={(e) => filterBooksTable(e.target.value)}
                        value={filterValue}
                        InputProps={{
                            startAdornment: <SearchIcon />,
                        }}
                    />
                    <Button color="inherit" variant="outlined" onClick={handleOpenModal}>
                        Add book
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default BookMenu;
