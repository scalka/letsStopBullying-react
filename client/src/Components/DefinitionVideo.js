import React from 'react';
import YouTube from 'react-youtube';
import {translate} from 'react-i18next';
// why video does not load: https://stackoverflow.com/questions/48714879/error-parsing-header-x-xss-protection-google-chrome
const DefinitionVideo = (props) => {
  const { t, i18n } = props;

  return(
    <section>
      <div> <p className="title">{t('video.' + props.active)}</p></div>
      <YouTube
        videoId={props.videoSrc}
        onReady={this._onReady}
      />
    </section>
  );
};

export default translate("translation")(DefinitionVideo);
