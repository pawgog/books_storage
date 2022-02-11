import * as React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextField, Button, IconButton, FormHelperText } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { addBookAction } from '../redux/actions';
import { IBookSchema } from '../types/interfaces';

export interface TBookForm {
    handleClose: Function;
    bookDetails: IBookSchema;
    isEditForm: boolean;
}

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
                        // eslint-disable-next-line no-alert
                        alert('Dispatch edit book action in form.');
                    } else {
                        dispatch(addBookAction([{ ...values, ...setID }]));
                    }
                    handleClose();
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="author"
                            label="Author"
                            variant="outlined"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.author}
                        />
                        {errors.author && touched.author && <FormHelperText error>{errors.author}</FormHelperText>}
                        <TextField
                            id="title"
                            label="Title"
                            variant="outlined"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {errors.title && touched.title && <FormHelperText error>{errors.title}</FormHelperText>}
                        <TextField
                            id="publishing"
                            label="Publishing"
                            variant="outlined"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.publishing}
                        />
                        {/* {errors.publishing && touched.publishing && (
                            <FormHelperText error>{errors.publishing}</FormHelperText>
                        )} */}
                        <TextField
                            id="genre"
                            label="Genre"
                            variant="outlined"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.genre}
                        />
                        {/* {errors.genre && touched.genre && <FormHelperText error>{errors.genre}</FormHelperText>} */}
                        <TextField
                            id="price"
                            label="Price"
                            type="number"
                            variant="outlined"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {/* {errors.price && touched.price && <FormHelperText error>{errors.price}</FormHelperText>} */}
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
