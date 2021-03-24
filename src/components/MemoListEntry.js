import React from "react";
import "./css/MemoListEntry.css";

class MemoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      openMemoModal,
      content,
      thumbnail,
      changeMemoInfo,
      changeVideoInfo,
      videoId,
      videoData,
      data,
    } = this.props;
    let filteredArr = videoData.filter((item) => item.id === videoId);
    let videoInfo = filteredArr[0];
    // console.log(videoData);
    return (
      <div
        className="memoListEntryContainer"
        onClick={() => {
          changeMemoInfo(null, null, content);
          changeVideoInfo(
            videoInfo.thumbnail,
            videoInfo.title,
            videoInfo.director,
            videoInfo.pubDate
          );
          openMemoModal();
        }}
      >
        <img
          className="videoListEntryThumbnail"
          alt="MemoThumbnail"
          src={thumbnail}
        />
        <div className="videoListEntryMemo">{content}</div>
      </div>
    );
  }
}

export default MemoListEntry;
