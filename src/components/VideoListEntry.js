import React from "react";
import "./css/VideoListEntry.css";

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="VideoListEntryContainer">
        <div
          className="VideoListEntryThumbnail"
          onClick={() => this.props.handleVideoClick()}
        ></div>
        <div className="VideoListEntryTitle">Video Title</div>
      </div>
    );
  }
}

export default VideoListEntry;
