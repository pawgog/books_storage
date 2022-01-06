import * as React from 'react';
import { AppBar, Box, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface BookMenuType {
    handleOpenModal: React.MouseEventHandler<HTMLButtonElement>;
}

function BookMenu({ handleOpenModal }: BookMenuType) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit" variant="outlined" onClick={handleOpenModal}>
                        Add book
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default BookMenu;
