import React from "react";
import MemoListEntry from "./MemoListEntry";
import "./css/MemoList.css";

class MemoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { openMemoModal, title } = this.props;
    return (
      <div className="MemoListContainer">
        <div className="MemoListTitle">{title}</div>
        <div className="MemoListEntryContainer">
          <MemoListEntry openMemoModal={openMemoModal}></MemoListEntry>
          <MemoListEntry openMemoModal={openMemoModal}></MemoListEntry>
          <MemoListEntry openMemoModal={openMemoModal}></MemoListEntry>
          <MemoListEntry openMemoModal={openMemoModal}></MemoListEntry>
          <MemoListEntry openMemoModal={openMemoModal}></MemoListEntry>
        </div>
        <button className="MemoListshowMoreBtn">더보기</button>
      </div>
    );
  }
}

export default MemoList;
