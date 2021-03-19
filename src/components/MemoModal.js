import React, { Component } from "react";
import "./css/MemoModal.css";

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isMemoModalOn, close } = this.props;
    return (
      <>
        {isMemoModalOn ? (
          <div className="MemoModalWholeContainer">
            <div className="memoModalContainer">
              <button>비디오감상</button>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
