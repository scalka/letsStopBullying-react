import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import WhatIsMain from './Components/WhatIsBullying/WhatIsBullyingMain';
import BullyingMain from './Components/WhatIsBullying/BullyingMain';
import Menu from './Components/Menu/Menu';
import { I18n } from 'react-i18next';
import i18n from './i18n'; // initialized i18next instance using reactI18nextModule


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <I18n>
            {
              (t, { i18n }) => (
                <div>
                  <h1>{t('appName')}</h1>
                  <button
                    onClick={() => { i18n.changeLanguage('es'); }}>{t('nav.linkES')}
                  </button>
                  <button
                    onClick={() => { i18n.changeLanguage('en'); }}>{t('nav.linkEN')}
                  </button>
                  <a
                    href='https://github.com/i18next/react-i18next'
                    target='_blank'
                  >
                  </a>
                  <Menu/>
                  <Route exact path='/' component={Home}/>
                  <Route path='/what-is-bullying' component={WhatIsMain}/>
                  <Route path='/bullying-main' component={BullyingMain}/>
                </div>
              )
            }
          </I18n>




        </div>
      </BrowserRouter>
    );
  }
}

export default App;
