import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {translate} from 'react-i18next';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      active: 'en'
    };
    this.changeActiveButton = this.changeActiveButton.bind(this);
  }

  changeActiveButton(lng) {
    console.log(lng);
    this.setState({
      active: lng
    });
  }

  render () {
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
      this.changeActiveButton(lng);
    };

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={window.location.origin + '/pictures/Home2.png'} alt='Home'/>
          </a>
        </div>
        <div className="navbar-menu navbar-end">
          <button className={this.state.active === 'es' ? 'button is-link is-active' : 'button is-link' } onClick={() => changeLanguage("es")}>{t('nav.linkES')}</button>

          <button className={this.state.active === 'en' ? 'button is-link is-active' : 'button is-link' } onClick={() => changeLanguage("en")}>{t('nav.linkEN')}</button>
        </div>
      </nav>
    );
  }
};

export default translate("translation")(Menu);




