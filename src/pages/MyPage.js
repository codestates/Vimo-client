import React from "react";
import { withRouter } from "react-router";
import "./css/MyPage.css";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }
  handleHomeClick = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <nav className="Nav">
          <button className="home" onClick={() => this.handleHomeClick()}>홈으로</button>
          <span className="logo">VIMO</span>
          <span className="logout">logout</span>
        </nav>
        <div id="userInfoBox">
          <div id="imgBox">이미지</div>
          <div id="userInfo">
            <div>
              <span id="username">유저네임</span>
              <button>edit</button>
            </div>
            <div id="email">이메일</div>
            <div>
              <span>영화본횟수</span>
              <span>메모횟수</span>
              <span>총친구수</span>
            </div>
          </div>
        </div>
        <div id="myContents">
          <div className="videoContainer">
            <div className="video"></div>
            <div className="video"></div>
            <div className="video"></div>
            <div className="video"></div>
          </div>
          <div className="videoContainer">
            <div className="video"></div>
            <div className="video"></div>
            <div className="video"></div>
            <div className="video"></div>
          </div>
        </div>
        <div id="btnContainer">
          <button id="extend">펼치기</button>
        </div>
      </div>
    );
  }
}

export default withRouter(MyPage);
