import './bootstrap';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Clock from './components/Clock';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>

        <Clock/>

    </React.StrictMode>
)
