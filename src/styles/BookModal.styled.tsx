import styled from 'styled-components';
import { Dialog } from '@mui/material';

export const BooksModalStyled = styled(Dialog)`
    & .MuiPaper-root {
        min-width: 400px;
        padding: 50px;
    }
`;

export const BooksFormModalContentStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;

    & > button:first-child {
        margin-right: 30px;
    }
`;
