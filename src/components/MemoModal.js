import React, { Component } from "react";
import "./css/MemoModal.css";

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isMemoModalOn, close, handleVideoClick } = this.props;
    return (
      <>
        {isMemoModalOn ? (
          <div className="MemoModalWholeContainer">
            <div className="memoModalContainer">
              <div className="MemoModalMemoPart">
                <div className="MemoModalMemoBanner">Memo</div>
                <div className="MemoModalUserProfile">
                  <div className="MemoModalUserProfilePic" />
                  <div className="MemoModalUsername">Anonymous</div>
                </div>
                <p className="MemoModalMemoContent">
                  헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에
                  의하여 연임할 수 있다. 국회의원은 현행범인인 경우를 제외하고는
                  회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 법원은
                  최고법원인 대법원과 각급법원으로 조직된다. 법률이 헌법에
                  위반되는 여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에
                  제청하여 그 심판에 의하여 재판한다.
                </p>
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
