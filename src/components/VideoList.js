import React from "react";
import VideoListEntry from "./VideoListEntry";
import "./css/VideoList.css";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="VideoListContainer">
        <div className="VideoListTitle">{this.props.title}</div>
        <div className="mainVideoListEntryContainer">
          <VideoListEntry></VideoListEntry>
          <VideoListEntry></VideoListEntry>
          <VideoListEntry></VideoListEntry>
          <VideoListEntry></VideoListEntry>
          <VideoListEntry></VideoListEntry>
        </div>
      </div>
    );
  }
}

export default VideoList;
