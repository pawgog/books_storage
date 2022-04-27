import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextField, Button, IconButton, FormHelperText } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { addBookAction, editBookAction } from '../redux/actions';
import { BooksFormStyled, BooksFormButtonStyled } from '../styles/BookForm.styled';
import { formFieldsData } from '../helpers/staticData';
import { IBookObject } from '../types/interfaces';

export interface TBookForm {
    handleClose: Function;
    bookDetails: IBookObject;
    isEditForm: boolean;
}

export interface TFormFields {
    fieldName: string;
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    values: any;
    errors: any;
    touched: any;
    mandatory: boolean;
}

const FormTextField = ({ fieldName, handleChange, handleBlur, values, errors, touched, mandatory }: TFormFields) => (
    <>
        <TextField
            id={fieldName}
            label={fieldName}
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values}
        />
        {mandatory && errors[fieldName] && touched[fieldName] && (
            <FormHelperText error>{errors[fieldName]}</FormHelperText>
        )}
    </>
);

const isFormTextFieldMandatory = () => {
    const validationObject: { [key: string]: Yup.StringSchema } = {};

    formFieldsData.forEach(({ name, mandatory }) => {
        if (mandatory) validationObject[name] = Yup.string().required();
    });

    return Yup.object(validationObject);
};

const BookForm = ({ handleClose, bookDetails, isEditForm }: TBookForm) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    return (
        <BooksFormStyled>
            <BooksFormButtonStyled>
                <IconButton aria-label="cancel" onClick={() => handleClose()}>
                    <CancelIcon />
                </IconButton>
            </BooksFormButtonStyled>
            <Formik
                initialValues={bookDetails}
                enableReinitialize
                validationSchema={isFormTextFieldMandatory()}
                onSubmit={(values, { setSubmitting }) => {
                    const setID = { id: Math.floor(Math.random() * 100) };
                    setSubmitting(false);
                    if (isEditForm) {
                        dispatch(editBookAction([{ ...values }]));
                    } else {
                        dispatch(addBookAction([{ ...values, ...setID }]));
                    }
                    handleClose();
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        {formFieldsData.map(({ name, mandatory }) => (
                            <FormTextField
                                key={name}
                                fieldName={t(name)}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                values={values[name]}
                                errors={errors}
                                touched={touched}
                                mandatory={mandatory}
                            />
                        ))}
                        <Button variant="contained" type="submit" disabled={isSubmitting}>
                            {t('submit')}
                        </Button>
                    </form>
                )}
            </Formik>
        </BooksFormStyled>
    );
};

export default BookForm;
