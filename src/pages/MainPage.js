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
      username: "Anonymous",
      // isLogin: false,
      isLoginModalOn: false,
      isMemoModalOn: false,
      bgNum: 1,
      isSearching: false,
      queryString: "",
      data: {},
    };
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSearchBox = this.handleSearchBox.bind(this);
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

  handleLoginChange = () => {
    axios
      .get("https://server.vimo.link/link/mainpage", {
        withCredentials: true,
      })
      .then((res) => {
        this.props.handleLogin();
      })
      .catch((err) => console.log("바보"));
  };

  handleSearchBox = (event) => {
    this.setState({ queryString: event.target.value });
    this.setState({ isSearching: true });
    axios
      .get(
        `https://server.vimo.link/link/searchvideos?keyword={${this.state.queryString}}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.props.handleLogin();
    axios.get("https://server.vimo.link/link/mainpage").then((res) => {
      this.setState({ data: res.data.data });
      console.log(this.state.data);
    });
  }

  render() {
    const videoListArr =
      this.state.isSearching && this.state.isLogin
        ? [
            `검색결과: ${this.state.queryString}`,
            "감상중인 콘텐츠",
            "메모가 가장 많은 콘텐츠",
            "새로운 콘텐츠",
          ]
        : !this.state.isSearching && this.state.isLogin
        ? ["감상중인 콘텐츠", "메모가 가장 많은 콘텐츠", "새로운 콘텐츠"]
        : this.state.isSearching && !this.state.isLogin
        ? [
            `검색결과: ${this.state.queryString}`,
            "메모가 가장 많은 콘텐츠",
            "새로운 콘텐츠",
          ]
        : ["메모가 가장 많은 콘텐츠", "새로운 콘텐츠"];
    const memoListArr = this.state.isLogin
      ? ["내가 감상한 콘텐츠의 메모", "인기 콘텐츠의 메모", "새로운 메모"]
      : ["베스트 유저의 메모", "인기 콘텐츠의 메모", "새로운 메모"];
    return (
      <>
        <LoginModal
          isLoginModalOn={this.state.isLoginModalOn}
          close={this.closeModal}
          handleLoginChange={this.handleLoginChange}
          handleLogin={this.props.handleLogin}
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
                value={this.state.queryString}
                onChange={this.handleSearchBox}
              />
            </div>
            <div className="mainNavUserContainer" onClick={this.openModal}>
              <img
                className="mainNavProfilePic"
                alt="profilePic"
                src="https://i.imgur.com/FP3hraO.png"
              />
              <div className="mainNavUsernameBox">
                <div className="mainNavUsername">{this.state.username}</div>
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
            {videoListArr.map((category) => (
              <VideoList
                title={category}
                handleVideoClick={this.handleVideoClick}
                data={this.state.data}
              />
            ))}
          </div>
          <div className="mainMemoContainer">
            {memoListArr.map((category) => (
              <MemoList title={category} openMemoModal={this.openMemoModal} />
            ))}
          </div>
          <footer className="mainFooter">
            <div className="mainFooterCodeStatesLogo"></div>
            <div className="mainFooterVimoLogo"></div>
            <div className="footerContents">
              Team WodeCode <br />
              <br />
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
