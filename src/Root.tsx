import * as React from 'react';
import BookModal from './components/BookModal';
import BooksList from './components/BooksList';

function Root() {
    return (
        <div className="books-dashboard-body">
            <BookModal />
            <BooksList />
        </div>
    );
}

export default Root;
