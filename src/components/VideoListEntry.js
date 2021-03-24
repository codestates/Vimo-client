import React from "react";
import "./css/VideoListEntry.css";
import axios from "axios";

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="VideoListEntryContainer">
        <img
          src={
            this.props.thumbnail === ""
              ? "/images/defaultThumbnail.png"
              : this.props.thumbnail
          }
          className="VideoListEntryThumbnail"
          onClick={() => {
            this.props.changeVideoUrl(this.props.url, this.props.id);
            axios
              .get(
                `https://server.vimo.link/link/usersvideos?videoid=${this.props.id}`
              )
              .then((res) =>
                this.props.changeCurrentTime(res.data.data.currentTime)
              );
            this.props.handleVideoClick();
          }}
          alt={this.props.title}
        />
        <div className="VideoListEntryTitle">{this.props.title}</div>
      </div>
    );
  }
}

export default VideoListEntry;
