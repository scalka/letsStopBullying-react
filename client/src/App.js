import React, {Component} from 'react';
import {translate} from 'react-i18next';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import WhatIsMain from './Components/WhatIsBullying/WhatIsBullyingMain';
import BullyingMain from './Components/WhatIsBullying/BullyingMain';
import Menu from './Components/Menu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
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
