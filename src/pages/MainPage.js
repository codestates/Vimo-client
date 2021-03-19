import React from "react";
import { withRouter } from "react-router";
import VideoList from "../components/VideoList";
import MemoList from "../components/MemoList";
import LoginModal from "../components/LoginModal";
import MemoModal from "../components/MemoModal";
import "./css/MainPage.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginModalOn: false,
      isMemoModalOn: false,
    };
    this.handleVideoClick = this.handleVideoClick.bind(this);
  }
  openModal = () => {
    this.setState({ isLoginModalOn: true });
  };
  closeModal = () => {
    this.setState({ isLoginModalOn: false });
  };
  openMemoModal = () => {
    this.setState({ isMemoModalOn: true });
  };
  closeMemoModal = () => {
    this.setState({ isMemoModalOn: false });
  };
  handleVideoClick = () => {
    this.props.history.push("/video");
  };

  render() {
    return (
      <>
        <LoginModal
          isLoginModalOn={this.state.isLoginModalOn}
          close={this.closeModal}
        />
        <MemoModal
          isMemoModalOn={this.state.isMemoModalOn}
          close={this.closeMemoModal}
        />
        <div className="mainContainer">
          <nav className="mainNavBar">
            <img className="mainNavLogo" alt="logo" />
            <div>
              <input type="text" placeholder="검색어 입력" />
              <button onClick={this.handleVideoClick}>검색</button>
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
              <button className="mainImgChangeBtn"></button>
              <button className="mainImgChangeBtn"></button>
              <button className="mainImgChangeBtn"></button>
              <button className="mainImgChangeBtn"></button>
            </div>
          </div>
          <div className="mainVideoContainer">
            <VideoList title={"감상중인 콘텐츠"} />
            <VideoList title={"메모가 가장 많은 콘텐츠"} />
            <VideoList title={"새로운 콘텐츠"} />
          </div>
          <div className="mainMemoContainer">
            <MemoList
              title={"새로운 메모"}
              openMemoModal={this.openMemoModal}
            />
            <MemoList
              title={"감상한 콘텐츠의 메모"}
              openMemoModal={this.openMemoModal}
            />
            <MemoList
              title={"인기 콘텐츠의 메모"}
              openMemoModal={this.openMemoModal}
            />
          </div>
          <footer className="mainFooter">
            <div className="footerContents">
              SEONA BAK / seonabak0109@gmail.com <br />
              JAEYOUNG SEONG / wodud2587@gmail.com <br />
              MINJE SHIN / sinminji1004@gmail.com <br />
              JUNGHO CHOI / 9rganizedchaos@gmail.com <br />
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default withRouter(MainPage);
