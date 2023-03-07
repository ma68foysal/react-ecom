import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import store from './services/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);



