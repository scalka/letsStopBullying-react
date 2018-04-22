import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {translate} from 'react-i18next';

const Menu = (props) => {
  const { t, i18n } = props;
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={window.location.origin + '/pictures/Home2.png'} alt='Home'/>
        </a>
      </div>
      <div className="navbar-menu navbar-end">
        <button onClick={() => changeLanguage("es")}>{t('nav.linkES')}</button>
        <button onClick={() => changeLanguage("en")}>{t('nav.linkEN')}</button>
      </div>
    </nav>
  );
};

export default translate("translation")(Menu);




