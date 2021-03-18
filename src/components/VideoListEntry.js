import React from "react";

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img alt="" />
        <span>영화제목</span>
      </div>
    );
  }
}

export default VideoListEntry;
