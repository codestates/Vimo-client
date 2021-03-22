import React from "react";
import { withRouter } from "react-router";
import "./css/MyPage.css";
import MyVideoListEntry from "../components/MyVideoListEntry";
import axios from "axios";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "annoymous",
      email: "abc@naver.com",
      password: "",
      newPassword: "",
      checkPassword: "",
      errorMessage: "",
      usermemo: "",
      movieCount: "8",
      memoCount: "8",
      friendsCount: "3",
    };
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handelQuitBtnClick = this.handelQuitBtnClick.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handelQuitMemo = this.handelQuitMemo.bind(this);
    this.handleVideoMemo = this.handleVideoMemo.bind(this);
  }

  handelQuitMemo = () => {
    document.getElementById("memo").style.display = "none";
  };

  handelQuitBtnClick = () => {
    document.getElementById("editModal").style.display = "none";
  };

  handleHomeClick = () => {
    this.props.history.push("/");
  };

  handleEditClick = () => {
    document.getElementById("editModal").style.display = "block";
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

  handleConfirm = () => {
    if (this.state.newPassword !== this.state.checkPassword) {
      this.setState({
        errorMessage: "새로운비밀번호가 다릅니다",
      });
    } else {
      alert("확인되었습니다");
    }
  };

  handleVideoMemo = () => {
    this.setState({
      usermemo: "와 이 영화 대박 재밌네",
    });
    document.getElementById("memo").style.display = "block";
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
              <button id="MyPageUserEditBtn" onClick={this.handleEditClick}>
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
        <div id="editModal" class="modal">
          <div class="editmodal-content">
            <div class="close" onClick={this.handelQuitBtnClick}>
              &times;
            </div>
            <div id="editImg">img</div>
            <div>
              <div className="editText">
                <span>새로운유저내임</span>
                <input
                  className="editInput"
                  onChange={this.handleInputValue("username")}
                ></input>
              </div>
              <div className="editText">
                <span>현재비밀번호</span>
                <input
                  type="password"
                  className="editInput"
                  onChange={this.handleInputValue("password")}
                ></input>
              </div>
              <div className="editText">
                <span>새로운비밀번호</span>
                <input
                  type="password"
                  className="editInput"
                  onChange={this.handleInputValue("newPassword")}
                ></input>
              </div>
              <div className="editText">
                <span>비밀번호확인</span>
                <input
                  type="password"
                  className="editInput"
                  onChange={this.handleInputValue("checkPassword")}
                ></input>
              </div>
              <div id="confirmBtnBox">
                <button
                  type="password"
                  id="confirm"
                  onClick={this.handleConfirm}
                >
                  confirm
                </button>
              </div>
            </div>
            <div id="alert">{this.state.errorMessage}</div>
          </div>
        </div>
        <div id="memo" class="modal">
          <div class="modal-content">
            <div class="close" onClick={this.handelQuitMemo}>
              &times;
            </div>
            <div id="memoBox">{this.state.usermemo}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MyPage);
