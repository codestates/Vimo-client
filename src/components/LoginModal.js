import React, { Component } from "react";
import "./css/LoginModal.css";
import axios from "axios";

const crypto = require("crypto");

const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const passwordRule = /^.*(?=^.{0,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignin: true,
      email: "",
      password: "",
      username: "",
      alertLoginMessage: "이메일과 비밀번호를 입력해주세요",
      alertSignupMessage: "이메일과 비밀번호, 유저네임을 입력해주세요",
    };
    this.handleLoginBtn = this.handleLoginBtn.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleLoginBtn = async () => {
    if (this.state.email === "" || this.state.password === "") {
      this.setState({ alertLoginMessage: "이메일과 비밀번호를 입력해주세요" });
      // } else if (!emailRule.test(this.state.email)) {
      //   this.setState({ alertLoginMessage: "유효한 이메일을 입력해주세요" });
      // } else if (!passwordRule.test(this.state.password)) {
      //   this.setState({ alertLoginMessage: "특수문자/문자/숫자를 포함해주세요" });
      // } else {
    } else {
      await axios
        .post(
          "https://server.vimo.link/user/login",
          {
            email: this.state.email,
            password: crypto
              .createHash("sha512")
              .update(this.state.password)
              .digest("base64"),
          },
          { "Content-Type": "application/json", withCredentials: true }
        )
        .then((res) => {
          this.props.appUserIdChange(res.data.data.id);
          this.props.handleLogin(res.data.data.accessToken);
          this.props.updateUsername(res.data.data.username);
          this.props.close();

          // window.location.replace("/");
          this.props.handleLoginChange(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  };

  handleSignUpBtn = () => {
    if (
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.username === ""
    ) {
      this.setState({
        alertSignupMessage: "유저네임과 이메일, 비밀번호를 입력해주세요",
      });
    } else if (!emailRule.test(this.state.email)) {
      this.setState({ alertSignupMessage: "유효한 이메일을 입력해주세요" });
    } else if (!passwordRule.test(this.state.password)) {
      this.setState({
        alertSignupMessage: "특수문자/문자/숫자를 포함해주세요",
      });
    } else {
      axios
        .post(
          "https://server.vimo.link/user/signup",
          {
            email: this.state.email,
            password: crypto
              .createHash("sha512")
              .update(this.state.password)
              .digest("base64"),
            username: this.state.username,
            isSocialLogin: "false",
          },
          { "Content-Type": "application/json", withCredentials: true }
        )
        .then((res) => {
          this.setState({ isSignin: true });
        })
        .catch((err) => console.log(err));
    }
  };

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { isLoginModalOn, close } = this.props;
    return (
      <>
        {isLoginModalOn ? (
          <div className="ModalWholeContainer">
            <div
              className={
                this.state.isSignin
                  ? "loginModalContainer"
                  : "loginModalContainer right-panel-active"
              }
            >
              <div className="form-container sign-up-container">
                <div className="form">
                  <h1 style={{ marginBottom: "0.75rem" }}>회 원 가 입</h1>
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={this.handleInputValue("username")}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={this.handleInputValue("email")}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={this.handleInputValue("password")}
                  />
                  <div className="loginModalLoginAlertBanner active">
                    {this.state.alertSignupMessage}
                  </div>
                  <button onClick={this.handleSignUpBtn}>회 원 가 입</button>
                </div>
              </div>
              <div className="form-container sign-in-container">
                <div className="form">
                  <h1>로 그 인</h1>
                  <div className="social-container">
                    <a className="social">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="social">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={this.handleInputValue("email")}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={this.handleInputValue("password")}
                    maxLength="15"
                  />
                  <div className="loginModalLoginAlertBanner active">
                    {this.state.alertLoginMessage}
                  </div>
                  <button onClick={() => this.handleLoginBtn()}>
                    로 그 인
                  </button>
                </div>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>어 서 오 세 요</h1>
                    <p>로그인하시고 비모와의 여정을 함께 하세요!</p>
                    <button
                      className="ghost"
                      id="signIn"
                      onClick={() => {
                        this.setState({ isSignin: true });
                      }}
                    >
                      로 그 인
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>반 갑 습 니 다</h1>
                    <p>비모에 가입하시고 동영상을 보며 메모를 남기세요</p>
                    <button
                      className="ghost"
                      id="signUp"
                      onClick={() => {
                        this.setState({ isSignin: false });
                      }}
                    >
                      회 원 가 입
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="LoginModalCloseBtn">
              <i className="fas fa-times" onClick={close} />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
