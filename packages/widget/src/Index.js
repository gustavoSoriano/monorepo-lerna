import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const Widget = document.querySelector('.widget');

ReactDOM.render(
    <React.StrictMode>
        <App Widget={Widget} />
    </React.StrictMode>,
    Widget,
);
