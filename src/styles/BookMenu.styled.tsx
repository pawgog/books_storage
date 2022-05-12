import styled from 'styled-components';
import { Box, Toolbar } from '@mui/material';

export const StyledToolbar = styled(Toolbar)`
    justify-content: space-between;

    & .MuiInputBase-root,
    & .MuiInputLabel-root {
        color: ${({ theme }) => theme.colors.white};

        & svg {
            fill: ${({ theme }) => theme.colors.white};
        }
        & fieldset,
        &:hover:not(.Mui-disabled):before,
        &:hover,
        &::before {
            border-color: ${({ theme }) => theme.colors.white};
        }
    }
    & .MuiOutlinedInput-root,
    & .MuiOutlinedInput-root:hover {
        border: 1px solid ${({ theme }) => theme.colors.white};
    }
`;

export const StyledBox = styled(Box)`
    flex-grow: 1;
`;

export const StyledSelectBox = styled(Box)`
    min-width: 120px;
`;
