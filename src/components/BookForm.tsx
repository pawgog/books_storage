import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextField, Button, IconButton, FormHelperText } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { addBookAction, editBookAction } from '../redux/actions';
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

const FormFields = [
    {
        name: 'author',
        mandatory: true,
    },
    {
        name: 'title',
        mandatory: true,
    },
    {
        name: 'publishing',
        mandatory: false,
    },
    {
        name: 'genre',
        mandatory: false,
    },
    {
        name: 'price',
        mandatory: false,
    },
];

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

const BookForm = ({ handleClose, bookDetails, isEditForm }: TBookForm) => {
    const dispatch = useDispatch();

    return (
        <div className="books-form">
            <div className="books-form__btn-cancel">
                <IconButton aria-label="cancel" onClick={() => handleClose()}>
                    <CancelIcon />
                </IconButton>
            </div>
            <Formik
                initialValues={bookDetails}
                enableReinitialize
                validationSchema={Yup.object().shape({
                    author: Yup.string().required('Field required!'),
                    title: Yup.string().required('Field required!'),
                    // publishing: Yup.string().required('Field required!'),
                    // genre: Yup.string().required('Field required!'),
                    // price: Yup.string().required('Field required!'),
                })}
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
                        {FormFields.map(({ name, mandatory }) => (
                            <FormTextField
                                fieldName={name}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                values={values[name]}
                                errors={errors}
                                touched={touched}
                                mandatory={mandatory}
                            />
                        ))}
                        <Button variant="contained" type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default BookForm;
