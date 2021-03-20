import React from "react";
import { withRouter } from "react-router";
import VideoList from "../components/VideoList";
import MemoList from "../components/MemoList";
import LoginModal from "../components/LoginModal";
import MemoModal from "../components/MemoModal";
import "./css/MainPage.css";
import axios from "axios";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginModalOn: false,
      isMemoModalOn: false,
      bgNum: 1,
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

  componentDidMount() {
    axios.get("https://server.vimo.link/link/mainpage").then((res) => {
      console.log(res.data);
    });
  }

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
          handleVideoClick={this.handleVideoClick}
        />
        <div className="mainContainer">
          <nav className="mainNavBar">
            <div className="mainNavLogo" alt="logo" />
            <div className="mainSearchBoxContainer">
              <input
                className="searchBoxInput"
                type="text"
                placeholder="검색어를 입력하세요"
              />
            </div>
            <div className="mainNavUserContainer" onClick={this.openModal}>
              <div className="mainNavProfilePic"></div>
              <div className="mainNavUsernameBox">
                <div className="mainNavUsername">Anonymous</div>
              </div>
            </div>
          </nav>
          <div
            className={
              this.state.bgNum === 1
                ? "mainMainBanner1"
                : this.state.bgNum === 2
                ? "mainMainBanner2"
                : this.state.bgNum === 3
                ? "mainMainBanner3"
                : "mainMainBanner4"
            }
          >
            <div className="mainTextContainer">
              <h1>Video + Memo = "Vimo"</h1>
              <h4>
                영상을 보며 무언가를 기록해두고 싶었던 적이 있나요? <br />
                하지만 영상은 당신의 번쩍이는 아이디어를 기다려주지 않죠! <br />
                설상가상, 동영상 캡쳐조차 허락하지 않는 기존의 OTT서비스! <br />
                동영상에서 바로 메모를 남길 수 있다면 어떨까요? <br />
              </h4>
            </div>
            <div className="mainImgChangeBtnContainer">
              <button
                className="mainImgChangeBtn"
                onClick={() => this.setState({ bgNum: 1 })}
              ></button>
              <button
                className="mainImgChangeBtn"
                onClick={() => this.setState({ bgNum: 2 })}
              ></button>
              <button
                className="mainImgChangeBtn"
                onClick={() => this.setState({ bgNum: 3 })}
              ></button>
              <button
                className="mainImgChangeBtn"
                onClick={() => this.setState({ bgNum: 4 })}
              ></button>
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
