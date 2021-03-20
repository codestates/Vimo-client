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
                <div className="MemoModalUserProfile">
                  <img className="MemoModalUserProfilePic" src="" alt="" />
                  <div className="MemoModalUsername">유저네임</div>
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
                <img className="MemoModalVideoThumbnail" src="" alt="" />
                <p className="MemoModalVideoDescription">
                  “메모와 함께 하는 OTT서비스 VIMO비모입니다. VIMO에서는
                  유저들에게 최고의 경험을 전달하기 위해 늘 노력하고 있습니다.
                  영화정보 제공 서비스 중 영화 내용 요약 부분은 현재 서비스
                  준비중에 있습니다. 최대한 빠른 시일 내에 더 풍부한 영화정보를
                  제공할 수 있도록 힘쓰겠습니다. VIMO를 이용해주시는 유저
                  여러분들께 양해의 말씀과 감사의 말씀을 전합니다. 감사합니다.”
                </p>
                <button onClick={handleVideoClick}>이 영화 보기</button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
