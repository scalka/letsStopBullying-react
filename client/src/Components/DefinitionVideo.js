import React from 'react';
import YouTube from 'react-youtube';
// why video does not load: https://stackoverflow.com/questions/48714879/error-parsing-header-x-xss-protection-google-chrome
export const DefinitionVideo = (props) => {

  return(
    <section>
      <div> <p className="title">{props.active}</p></div>
      <YouTube
        videoId={props.videoSrc}
        onReady={this._onReady}
      />
    </section>
  );
};
