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
        <div className="VideoListEntryThumbnail">영화 썸네일</div>
        <div className="VideoListEntryTitle">영화제목</div>
      </div>
    );
  }
}

export default VideoListEntry;
