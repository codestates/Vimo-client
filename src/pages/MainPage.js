import React from "react";
import { withRouter } from "react-router";
import VideoList from "../components/VideoList";
import MemoList from "../components/MemoList";
import LoginModal from "../components/LoginModal";
import "./css/MainPage.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginModalOn: false,
    };
  }
  openModal = () => {
    console.log("clicked!");
    this.setState({ isLoginModalOn: true });
    console.log(this.state.isLoginModalOn);
  };
  closeModal = () => {
    this.setState({ isLoginModalOn: false });
  };

  render() {
    return (
      <>
        <LoginModal
          isLoginModalOn={this.state.isLoginModalOn}
          close={this.closeModal}
        />
        <div className="mainContainer">
          <nav className="mainNavBar">
            <img className="mainNavLogo" alt="logo" />
            <div>
              <input type="text" placeholder="검색어 입력" />
              <button>검색</button>
            </div>
            <div onClick={this.openModal}>
              <img src="https://imgur.com/SifRQnT" alt="profileImage" />
              <span>Username</span>
            </div>
          </nav>
          <div className="mainMainBanner">
            <div className="mainTextContainer">
              <h1>Vimo</h1>
              <h2>영상을 보며 떠오른 생각을 기록해두고 싶었던 적은 없나요?</h2>
              <h4>
                영상을 보며 무언가를 기록해두고 싶었던 적이 있나요? 하지만
                영상은 당신의 번쩍이는 아이디어를 기다려주지 않죠! 설상가상,
                동영상 캡쳐도 허락하지 않는 OTT! 동영상에서 바로 메모를 남길 수
                있다면 어떨까요? <br />
                <br />
                video + memo = VIMO!
              </h4>
            </div>
            <div className="mainImgChangeBtnContainer">
              <button className="mainImgChangeBtn">1</button>
              <button className="mainImgChangeBtn">2</button>
              <button className="mainImgChangeBtn">3</button>
              <button className="mainImgChangeBtn">4</button>
            </div>
          </div>
          <div className="mainVideoContainer">
            <VideoList title={"1"} />
            <VideoList title={"2"} />
            <VideoList title={"3"} />
          </div>
          <div className="mainMemoContainer">
            <MemoList />
            <MemoList />
            <MemoList />
          </div>
          <footer className="mainFooter">푸터입니다</footer>
        </div>
      </>
    );
  }
}

export default withRouter(MainPage);
