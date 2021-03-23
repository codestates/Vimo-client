import React from "react";
import "./css/MemoListEntry.css";

class MemoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { openMemoModal, content, thumbnail } = this.props;
    return (
      <>
        <img
          className="videoListEntryThumbnail"
          alt="MemoThumbnail"
          onClick={() => openMemoModal()}
          src={thumbnail}
        />
        <div className="videoListEntryMemo">{content}</div>
      </>
    );
  }
}

export default MemoListEntry;
