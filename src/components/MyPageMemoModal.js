import React from "react";
import "./css/MyPageMemoModal.css";

class MyPageMemoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {
      handleVideoMemoModalOnOff,
      memoUsername,
      memoContent,
      data,
    } = this.props;
    return (
      <>{this.props.display ? <div className="MemoModalWholeContainer">
        <div className="memoModalContainer">
          <div className="MyPageMemoModalMemoPart">
            <div className="MemoModalMemoBanner">Memo</div>
            <div className="MemoModalUserProfile">
              <div className="MemoModalUsername"></div>
            </div>
            <p className="MemoModalMemoContent">{data.content}</p>
          </div>
          <div className="MemoModalVideoPart">
            <div className="MemoModalVideoBanner">Video</div>
            <div className="MemoModalVideoThumbnail" />
            <div className="MemoModalTagContainer">
              <span>{data.createdAt.slice(0, 10)}</span>
              <span>{String(data.videoTime / 60) + "분"}</span>
              <span>1900</span>
            </div>
          </div>
        </div>
        <div className="memoModalCloseBtn">
          <i className="fas fa-times" onClick={handleVideoMemoModalOnOff}></i>
        </div>
      </div> : null}
      </>
    )
  }
}

export default MyPageMemoModal;