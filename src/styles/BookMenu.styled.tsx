import styled from 'styled-components';
import { Box, Toolbar } from '@mui/material';

export const StyledToolbar = styled(Toolbar)`
    justify-content: space-between;

    & .MuiInputBase-root {
        color: ${({ theme }) => theme.colors.white};
        &::before {
            border-bottom: 1px solid ${({ theme }) => theme.colors.white};
        }
        &:hover:not(.Mui-disabled):before {
            border-bottom: 2px solid ${({ theme }) => theme.colors.white};
        }
    }
`;

export const StyledBox = styled(Box)`
    flex-grow: 1;
`;

export const StyledSelectBox = styled(Box)`
    min-width: 120px;
`;
