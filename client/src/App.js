import React, { Component } from "react";
import ReactDOM from "react-dom";
import { translate, Trans } from "react-i18next";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import WhatIsMain from './Components/WhatIsBullying/WhatIsBullyingMain';
import BullyingMain from './Components/WhatIsBullying/BullyingMain';
import Menu from './Components/Menu/Menu';
import { I18n } from 'react-i18next';
import i18n from './i18n'; // initialized i18next instance using reactI18nextModule


class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <h2>{t('appName')}</h2>
            <button onClick={() => changeLanguage("es")}>{t('nav.linkES')}</button>
            <button onClick={() => changeLanguage("en")}>{t('nav.linkEN')}</button>
            <Menu/>
          </div>
          <Route exact path='/' component={Home}/>
          <Route path='/what-is-bullying' component={WhatIsMain}/>
          <Route path='/bullying-main' component={BullyingMain}/>
        </div>
      </BrowserRouter>
    );
  }
}

// extended main view with translate hoc
export default translate("translation")(App);
