import * as React from 'react';
import { Formik } from 'formik';

const BookForm = () => (
    <div>
        <Formik
            initialValues={{ author: '', title: '' }}
            validate={(values) => {
                const errors = { author: '', title: '' };
                if (!values.author) {
                    errors.author = 'Author name is required';
                } else if (!values.title) {
                    errors.title = 'Book title is required';
                }
                return errors;
            }}
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
                    <input
                        type="text"
                        name="author"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.author}
                    />
                    {errors.author && touched.author}
                    <input type="title" name="title" onChange={handleChange} onBlur={handleBlur} value={values.title} />
                    {errors.title && touched.title}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default BookForm;
