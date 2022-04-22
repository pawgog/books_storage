import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './i18n';
import store from './redux/store';
import Home from './components/Home';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Home />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
