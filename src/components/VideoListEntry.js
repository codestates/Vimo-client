import React from "react";
import "./css/VideoListEntry.css";
import axios from "axios";

const reverseMakeProperTime = (input) => {
  if (!input) {
    return undefined;
  }
  let arr = input.split(":");
  return Number(arr[0]) * 3600 + Number(arr[1]) * 60 + Number(arr[2]);
};

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
                `https://server.vimo.link/link/uservideos?videoid=${this.props.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${this.props.accessToken}`,
                    // "Content-Type": "application/json",
                  },
                  withCredentials: true,
                }
              )
              .then((res) => {
                console.log(res.data);
                let current = reverseMakeProperTime(res.data.data.currenttime);
                console.log(current);
                this.props.updateCurrentTime(current);
              })
              .catch((err) => console.log(err));
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
