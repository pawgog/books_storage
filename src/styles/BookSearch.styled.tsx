import styled from 'styled-components';

const BooksSearchStyled = styled.div`
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

    & .MuiAutocomplete-root {
        width: 100%;
    }
`;

export default BooksSearchStyled;
