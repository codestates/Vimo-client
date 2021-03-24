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
      categoryVideo,
    } = this.props;
    let filteredArr = videoData.filter((item) => item.id === videoId);
    let videoInfo = filteredArr[0];
    let fileteredData = data[categoryVideo].filter(
      (item) => item.id === videoId
    );
    let videoObj = fileteredData[0];

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
          console.log(fileteredData);
        }}
      >
        <img
          className="videoListEntryThumbnail"
          alt="MemoThumbnail"
          src={videoObj.thumbnail}
        />
        <div className="videoListEntryMemo">{content}</div>
      </div>
    );
  }
}

export default MemoListEntry;
