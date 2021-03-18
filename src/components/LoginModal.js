import React, { Component } from "react";
import "./css/LoginModal.css";

export default class LoginModal extends Component {
  state = {};

  render() {
    const { isLoginModalOn, close } = this.props;
    return (
      <>
        {isLoginModalOn ? (
          <div className="a">
            <div className="b">여러분 저 모달창 띄웠어요!!!!</div>
            <button onClick={close}>닫기</button>
          </div>
        ) : null}
      </>
    );
  }
}
