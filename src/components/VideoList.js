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
      <div className="mainVideoListEntryContainer">
        <VideoListEntry></VideoListEntry>
        <VideoListEntry></VideoListEntry>
        <VideoListEntry></VideoListEntry>
        <VideoListEntry></VideoListEntry>
        <VideoListEntry></VideoListEntry>
      </div>
    );
  }
}

export default VideoList;
