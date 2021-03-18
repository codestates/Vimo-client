import React from "react";
import MemoListEntry from "./MemoListEntry";

class MemoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MemoListEntry></MemoListEntry>
        <MemoListEntry></MemoListEntry>
        <MemoListEntry></MemoListEntry>
        <MemoListEntry></MemoListEntry>
        <MemoListEntry></MemoListEntry>
      </div>
    );
  }
}

export default MemoList;
