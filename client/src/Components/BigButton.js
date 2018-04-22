import React from 'react';
import {translate} from 'react-i18next';

const BigButton = (props) => {
  //console.log(props);
  const { t, i18n } = props;
  return(
    <div className="card bigButton">
      <div className="card-image">
        <figure className="image is-4by3">
          <img className="menuImage" src={ props.image } alt={props.moduleName}/>
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-size-6">{t('bigButtons.' + props.moduleName)}</p>
      </div>
    </div>
  );
};

export default translate("translation")(BigButton);
