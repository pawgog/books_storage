import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getBooks from './helpers/fetchData';
import { AppState } from './redux/store';
import BookModal from './components/BookModal';
import BooksList from './components/BooksList';

function Root() {
    const dispatch = useDispatch();
    const getBooksCallback = React.useCallback(() => {
        dispatch(getBooks());
    }, [dispatch]);
    React.useEffect(() => {
        getBooksCallback();
    }, [getBooksCallback]);

    const booksList = useSelector((state: AppState) => state.booksList);
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
