import * as React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

const BookForm = () => (
    <Formik
        initialValues={{ author: '', title: '' }}
        validationSchema={Yup.object().shape({
            author: Yup.string().required('Required'),
            title: Yup.string().required('Required'),
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
                <input type="text" name="author" onChange={handleChange} onBlur={handleBlur} value={values.author} />
                {errors.author && touched.author}
                <input type="title" name="title" onChange={handleChange} onBlur={handleBlur} value={values.title} />
                {errors.title && touched.title}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
        )}
    </Formik>
);

export default BookForm;
