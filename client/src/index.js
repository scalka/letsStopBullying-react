import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
