import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, TextField, Button, FormControl, MenuItem, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledBox, StyledToolbar, StyledSelectBox } from '../styles/BookMenu.styled';

interface BookMenuType {
    handleOpenModal: React.MouseEventHandler<HTMLButtonElement>;
    filterBooksTable: (value: string) => void;
    filterValue: string;
}

function BookMenu({ handleOpenModal, filterBooksTable, filterValue }: BookMenuType) {
    const { t, i18n } = useTranslation();
    const [lang, setLanguage] = React.useState<string>('en');

    const handleChange = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

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
                    <StyledSelectBox>
                        <FormControl fullWidth>
                            <Select id="select-language" value={lang} onChange={(e) => handleChange(e.target.value)}>
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="pl">Polski</MenuItem>
                            </Select>
                        </FormControl>
                    </StyledSelectBox>
                </StyledToolbar>
            </AppBar>
        </StyledBox>
    );
}

export default BookMenu;
