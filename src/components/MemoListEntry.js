import React from "react";
import "./css/MemoListEntry.css";

class MemoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { openMemoModal } = this.props;
    return (
      <div className="videoListEntryThumbnail" onClick={() => openMemoModal()}>
        <div className="videoListEntryMemo">비디오에 대한 메모입니다</div>
      </div>
    );
  }
}

export default MemoListEntry;
