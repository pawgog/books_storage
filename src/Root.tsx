import * as React from 'react';
import booksList from './helpers/fetchData';
import BookModal from './components/BookModal';
import BooksList from './components/BooksList';

function Root() {
    // eslint-disable-next-line no-console
    console.log('books', booksList);

    return (
        <div className="books-dashboard-body">
            <BookModal />
            <BooksList books={booksList} />
        </div>
    );
}

export default Root;
