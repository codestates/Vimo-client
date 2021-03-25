import React from "react";
import "./css/MyPageEditModal.css";
import axios from "axios";

const crypto = require("crypto");

class MyPageEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      newPassword: "",
      checkPassword: "",
      errorMessage: "",
    };
  }
  handleInputValue = (key) => (e) => {
    this.setState({
      [key]: e.target.value,
      errorMessage: "",
    });
  };

  handleConfirm = () => {
    if (
      this.state.username === "" &&
      this.state.newPassword === "" &&
      this.state.checkPassword === ""
    ) {
      this.setState({
        errorMessage: "입력하신 정보가 없습니다!",
      });
    } else if (this.state.newPassword !== this.state.checkPassword) {
      this.setState({
        errorMessage: "입력하신 비밀번호가 일치하지 않습니다!",
      });
    } else {
      axios
        .patch("https://server.vimo.link/update/userinfo", {
          userId: this.props.userId,
          username: this.state.username,
          newPassword: crypto
            .createHash("sha512")
            .update(this.state.newPassword)
            .digest("base64"),
        })
        .then((res) => {
          this.props.handleEditModalOnOff();
          window.location.replace("/mypage");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  handleQuit = () => {
    this.setState({
      username: "",
      checkPassword: "",
      newPassword: "",
      errorMessage: "",
    });
    this.props.handleEditModalOnOff();
  };

  render() {
    return (
      <>
        {this.props.display ? (
          <div id="EditModalWholeContainer">
            <div class="EditModalContainer">
              <div className="EditModalUserProfile">
                <img
                  id="EditModalUserProfilePic"
                  alt="profilePic"
                  src="https://i.imgur.com/FP3hraO.png"
                />
              </div>
              <div className="EditModalContentPart">
                <span>자신의 정보를 변경하실수 있습니다</span>
                <div className="EditModalContentBox">
                  <span>username</span>
                  <input
                    className="EditModalContent"
                    onChange={this.handleInputValue("username")}
                  ></input>
                </div>
                <div className="EditModalContentBox">
                  <span>NewPassword</span>
                  <input
                    type="password"
                    className="EditModalContent"
                    onChange={this.handleInputValue("newPassword")}
                  ></input>
                </div>
                <div className="EditModalContentBox">
                  <span>NewPasswordCheck</span>
                  <input
                    type="password"
                    className="EditModalContent"
                    onChange={this.handleInputValue("checkPassword")}
                  ></input>
                </div>
                <div id="alert">{this.state.errorMessage}</div>
                <div id="EditModalComfirmBtnContainer">
                  <button id="EditModalComfirmBtn" onClick={this.handleConfirm}>
                    confrim
                  </button>
                </div>
              </div>
              <div className="EditModalCloseBtn" onClick={this.handleQuit}>
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default MyPageEditModal;
