import styled, { css } from 'styled-components';

const ArrowIcon = css`
    content: '';
    background: url('https://img.icons8.com/small/32/000000/long-arrow-up.png');
    background-size: cover;
    position: absolute;
    width: 15px;
    height: 15px;
    margin: 5px 10px;
`;

const BookListStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 10px 10px 23px -15px rgba(0, 0, 0, 0.75);

    & .MuiButton-root {
        width: 160px;
    }

    & .MuiTableBody-root h6 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & .MuiTableRow-root th {
        font-weight: 600;

        &[class*='asc']::after {
            ${ArrowIcon}
            transform: rotate(0deg);
        }

        &[class*='desc']::after {
            ${ArrowIcon}
            transform: rotate(180deg);
        }

        & > button {
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
        }
    }
`;

export default BookListStyled;
