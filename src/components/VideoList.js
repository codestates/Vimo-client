import React from "react";
import VideoListEntry from "./VideoListEntry";
import "./css/VideoList.css";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let category = "";
    if (this.props.title === "메모가 가장 많은 콘텐츠") {
      category = "popularVideos";
    } else if (this.props.title === "새로운 콘텐츠") {
      category = "newVideos";
    }
    return (
      <div className="VideoListContainer">
        <div className="VideoListTitle">{this.props.title}</div>
        <div className="mainVideoListEntryContainer">
          {Array.isArray(this.props.data[category])
            ? this.props.data[category].map((item) => (
                <VideoListEntry
                  handleVideoClick={this.props.handleVideoClick}
                  title={item.title}
                  thumbnail={item.thumbnail}
                ></VideoListEntry>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default VideoList;
