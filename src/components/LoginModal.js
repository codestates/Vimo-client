import React, { Component } from "react";
import "./css/LoginModal.css";
import axios from "axios";

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignin: true,
      email: "",
      password: "",
      username: "",
    };
    this.handleLoginBtn = this.handleLoginBtn.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleLoginBtn = () => {
    let loginModalLoginAlertBanner = document.querySelector(
      ".loginModalLoginAlertBanner"
    );
    if (this.state.email === "" || this.state.password === "") {
      loginModalLoginAlertBanner.classList.add("active");
    } else {
      axios
        .post(
          "https://server.vimo.link/user/login",
          {
            email: this.state.email,
            password: this.state.password,
          },
          { "Content-Type": "application/json", withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          this.props.close();
          this.props.handleLoginChange();
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
      alert("이메일, 비밀번호, 유저네임을 입력해주세요!");
    } else {
      axios
        .post(
          "https://server.vimo.link/user/signup",
          {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            isSocialLogin: true,
          },
          { "Content-Type": "application/json", withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          this.props.close();
          this.props.handleLoginChange();
        })
        .catch((err) => alert(err));
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
                  <h1>회 원 가 입</h1>
                  <span>닉네임과 이메일, 비밀번호를 입력해주세요</span>
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
                  <button onClick={this.handleSignUpBtn}>Sign Up</button>
                </div>
              </div>
              <div className="form-container sign-in-container">
                <div className="form">
                  <h1>Sign in</h1>
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
                  />
                  <div className="loginModalLoginAlertBanner active">
                    이메일과 비밀번호를 입력해주세요
                  </div>
                  <button onClick={() => this.handleLoginBtn()}>Sign In</button>
                </div>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                      To keep connected with us please login with your personal
                      info
                    </p>
                    <button
                      className="ghost"
                      id="signIn"
                      onClick={() => {
                        this.setState({ isSignin: true });
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button
                      className="ghost"
                      id="signUp"
                      onClick={() => {
                        this.setState({ isSignin: false });
                      }}
                    >
                      Sign Up
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
