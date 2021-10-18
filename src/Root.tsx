import * as React from 'react';
import BooksList from './components/BooksList';

function Root() {
    return (
        <div className="dashboard-body">
            <BooksList />
        </div>
    );
}

export default Root;
