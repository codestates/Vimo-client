import React, { Component } from "react";
import "./css/MemoModal.css";

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleVideoClick = this.handleVideoClick.bind(this);
  }
  handleVideoClick = () => {
    this.props.history.push("/video");
  };

  render() {
    const { isMemoModalOn, close } = this.props;
    return (
      <>
        {isMemoModalOn ? (
          <div className="MemoModalWholeContainer">
            <div className="memoModalContainer">
              <button onClick={() => this.handleVideoClick()}>
                비디오감상
              </button>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
