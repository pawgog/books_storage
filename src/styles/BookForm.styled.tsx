import styled from 'styled-components';

export const BooksFormStyled = styled.div`
    & form {
        display: flex;
        flex-direction: column;

        & .MuiFormControl-root {
            margin-top: 20px;
        }

        & button {
            margin-top: 30px;
        }
    }
`;

export const BooksFormButtonStyled = styled.div`
    position: absolute;
    top: 3%;
    right: 1%;
`;
