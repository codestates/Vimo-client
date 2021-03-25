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
      category,
      categoryVideo,
      changeOnlyVideoUrl,
    } = this.props;
    let filteredArr = videoData.filter((item) => item.id === videoId);
    let videoInfo = filteredArr[0];

    let fileteredData = data[categoryVideo].filter(
      (item) => item.id === videoId
    );
    let videoObj = fileteredData[0];

    let newFilteredArr = data[category].filter(
      (item) => item.videoId === videoId
    );

    let shortenMemo = function (input) {
      if (input.length > 20) {
        return input.slice(0, 20);
      }
      return input;
    };

    let shortenedMemo = shortenMemo(content) + "...";

    return (
      <div
        className="memoListEntryContainer"
        onClick={() => {
          console.log(videoInfo);
          changeMemoInfo(
            newFilteredArr[0].user.propfilePic,
            newFilteredArr[0].user.username,
            content
          );
          changeVideoInfo(
            videoInfo.thumbnail,
            videoInfo.title,
            videoInfo.director,
            videoInfo.pubDate
          );
          changeOnlyVideoUrl(videoInfo.url);
          openMemoModal();
          console.log(videoInfo.url);
        }}
      >
        <img
          className="videoListEntryThumbnail"
          alt="MemoThumbnail"
          src={videoObj.thumbnail}
        />
        <div className="videoListEntryMemo">{shortenedMemo}</div>
      </div>
    );
  }
}

export default MemoListEntry;
