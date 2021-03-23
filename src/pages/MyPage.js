import React from "react";
import { withRouter } from "react-router";
import "./css/MyPage.css";
import MyVideoListEntry from "../components/MyVideoListEntry";
import axios from "axios";
import MyPageEditModal from "../components/MyPageEditModal";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "annoymous",
      email: "abc@naver.com",
      usermemo: "",
      movieCount: "8",
      memoCount: "8",
      friendsCount: "3",
      displayEdit: false,
      displayMemo: false,
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleEditModalOnOff = this.handleEditModalOnOff.bind(this);
  }

  handleHomeClick = () => {
    this.props.history.push("/");
  };

  handleEditModalOnOff = () => {
    this.setState({
      displayEdit: (this.state.displayEdit ? false : true)
    })
  };

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleLogoutBtn = () => {
    axios
      .post("https://server.vimo.link/user/logout", null, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((res) => {
        this.props.handleLogout();
      })
      .catch((err) => console.log("로그아웃실패"));
  };

  render() {
    return (
      <div className="MyPagemainContainer">
        <nav className="MyPageNavBar">
          <div
            className="MyPageNavLogo"
            alt="logo"
            onClick={() => this.handleHomeClick()}
          />
          <div className="MyPageNavUserContainer">
            <div
              className="MyPageNavLogoutContainer"
              onClick={() => this.handleHomeClick()}
            >
              <div className="MyPageNavLogout" onClick={this.handleLogoutBtn}>
                logout
              </div>
            </div>
          </div>
        </nav>
        <div className="MyPageUserInfoContainer">
          <img
            className="MyPageProfilePic"
            alt="profilePic"
            src="https://i.imgur.com/FP3hraO.png"
          />
          <div id="MyPageUserInfoBox">
            <div id="MyPageUsernameBox">
              <span id="MyPageUsername">{this.state.username}</span>
              <button id="MyPageUserEditBtn" onClick={this.handleEditModalOnOff}>
                edit
              </button>
            </div>
            <div id="MyPageUseremailBox">
              <span id="MyPageUseremail">{this.state.email}</span>
            </div>
            <div id="MyPageUsercountBox">
              <span className="MyPageUsercount">
                영화본횟수: {this.state.movieCount}
              </span>
              <span className="MyPageUsercount">
                메모횟수: {this.state.memoCount}
              </span>
              <span className="MyPageUsercount">
                총회원수: {this.state.friendsCount}
              </span>
            </div>
          </div>
        </div>
        <div id="MyPageVideoMemoContainer">
          <MyVideoListEntry
            handleVideoMemo={this.handleVideoMemo}
          ></MyVideoListEntry>
          <MyVideoListEntry
            handleVideoMemo={this.handleVideoMemo}
          ></MyVideoListEntry>
        </div>
        <div id="MyPageVideoMemoExtendContainer">
          <button id="MyPageVideoMemoExtend">extend</button>
        </div>
        <MyPageEditModal display={this.state.displayEdit} handleEditModalOnOff={this.handleEditModalOnOff} />
      </div>
    );
  }
}

export default withRouter(MyPage);
