import * as React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, IconButton, FormHelperText } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const BookForm = () => (
    <div className="books-form">
        <div className="books-form__btn-cancel">
            <IconButton aria-label="cancel">
                <CancelIcon />
            </IconButton>
        </div>
        <Formik
            initialValues={{ author: '', title: '' }}
            validationSchema={Yup.object().shape({
                author: Yup.string().required('Field required!'),
                title: Yup.string().required('Field required!'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    // eslint-disable-next-line no-alert
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="author">Author</label>
                    <input
                        id="author"
                        type="text"
                        name="author"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.author}
                    />
                    {errors.author && touched.author && <FormHelperText error>{errors.author}</FormHelperText>}
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                    />
                    {errors.title && touched.title && <FormHelperText error>{errors.title}</FormHelperText>}
                    <Button variant="contained" type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    </div>
);

export default BookForm;
