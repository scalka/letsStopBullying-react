import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import WhatIsMain from './Components/WhatIsBullying/WhatIsBullyingMain';
import BullyingMain from './Components/WhatIsBullying/BullyingMain';
import Menu from './Components/Menu/Menu';
import { createStore, combineReducers } from 'redux';
import { localeReducer } from 'react-localize-redux';


const store = createStore(combineReducers({
  locale: localeReducer
}));


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div className="App">
            <Menu/>
            <Route exact path='/' component={Home}/>
            <Route path='/what-is-bullying' component={WhatIsMain}/>
            <Route path='/bullying-main' component={BullyingMain}/>

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
