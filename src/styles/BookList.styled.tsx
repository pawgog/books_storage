import styled, { css } from 'styled-components';

const ArrowIcon = css`
    content: '';
    background: url('https://img.icons8.com/ios/24/000000/arrow--v1.png');
    background-size: cover;
    position: absolute;
    width: 20px;
    height: 20px;
    margin: 2px 0 0 5px;
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

    & .MuiTableRow-root th {
        font-weight: 600;

        &[class*='asc']::after {
            ${ArrowIcon}
            transform: rotate(-90deg);
        }

        &[class*='desc']::after {
            ${ArrowIcon}
            transform: rotate(90deg);
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
