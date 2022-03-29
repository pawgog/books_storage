import React from 'react';
import { AppBar, Box, Toolbar, TextField, Button, FormControl, MenuItem, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface BookMenuType {
    handleOpenModal: React.MouseEventHandler<HTMLButtonElement>;
    filterBooksTable: (value: string) => void;
    filterValue: string;
}

function BookMenu({ handleOpenModal, filterBooksTable, filterValue }: BookMenuType) {
    const [lang, setLanguage] = React.useState('en');

    const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setLanguage(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
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
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <Select id="select-language" value={lang} displayEmpty onChange={handleChange}>
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="pl">Polski</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default BookMenu;
