import React from 'react'
import Link from 'gatsby-link'
import s from './youtube.module.css'

class Youtube extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
    this.createIframe = this.createIframe.bind(this)
  }

  createIframe(e) {
    const url = e.target.dataset.youtubeButton;
    let youtubePlaceholder = e.target.parentNode;
    var htmlString = `<div class="${s.video__youtube}"> <iframe class="${s.video__iframe}" src="${url}?autoplay=1" frameborder="0" allowfullscreen></iframe></div>`;

    youtubePlaceholder.style.display = 'none';
    youtubePlaceholder.insertAdjacentHTML('beforebegin', htmlString);
    youtubePlaceholder.parentNode.removeChild(youtubePlaceholder);
  }

  render() {
    const VIDEO_ID = this.props.ytid;

    return (
      <div className={s.video}>
        <div className={s.video__youtube} data-youtube>
          <img src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`} className={s.video__placeholder} />
          <button
            className={s.video__button}
            data-youtube-button={`https://www.youtube.com/embed/${VIDEO_ID}`}
            onClick={this.createIframe}
          >
          </button>
        </div>
      </div>
    )
  }
}

export default Youtube
