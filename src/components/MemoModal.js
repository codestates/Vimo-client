import React, { Component } from "react";
import "./css/MemoModal.css";

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      isMemoModalOn,
      close,
      handleVideoClick,
      memoProfilePic,
      memoUsername,
      memoContent,
    } = this.props;
    return (
      <>
        {isMemoModalOn ? (
          <div className="MemoModalWholeContainer">
            <div className="memoModalContainer">
              <div className="MemoModalMemoPart">
                <div className="MemoModalMemoBanner">Memo</div>
                <div className="MemoModalUserProfile">
                  <img
                    className="MemoModalUserProfilePic"
                    src={memoProfilePic}
                    alt="profilePicture"
                  />
                  <div className="MemoModalUsername">{memoUsername}</div>
                </div>
                <p className="MemoModalMemoContent">{memoContent}</p>
              </div>
              <div className="MemoModalVideoPart">
                <div className="MemoModalVideoBanner">Video</div>
                <div className="MemoModalVideoThumbnail" />
                <div className="MemoModalTagContainer">
                  <span>VideoTitle</span>
                  <span>Director</span>
                  <span>1900</span>
                </div>
                <button
                  className="MemoModalVideoBtn"
                  onClick={handleVideoClick}
                >
                  Watch
                </button>
              </div>
            </div>
            <div className="memoModalCloseBtn">
              <i className="fas fa-times" onClick={close}></i>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
