import React, { Component } from "react";
import "./css/VideoMemoModal.css";
import axios from "axios";

export default class VideoMemoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      videoId: "",
      content: "",
      videoTime: "",
      error: "",
    };
  }

  handelQuitBtnClick = () => {
    this.setState({
      error: "",
    })
    this.props.handelQuitBtnClick();
  };

  handleMemoChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleMemoSaveBtnClick = () => {
    let textinput = document.querySelector(".videoMemoModalMemoArea");
    textinput.value = "";

    if (this.state.content === "") {
      this.setState({
        error: "메모를 적어주세요",
      })
    } else {
      axios
        .post(
          "https://server.vimo.link/insert/memo",
          {
            userId: this.props.userId,
            videoId: this.props.videoId,
            content: this.state.content,
            videoTime: this.props.currentTime,
          },
          { "Content-Type": "application/json", withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <>
        {this.props.display ? (
          <div className="videoMemoModalWholeContainer">
            <div className="videomemoModalContainer">
              <div className="videoMemoModalMemoPart">
                <div id="videoMemoModalMemoBox">
                  <div className="videoMemoModalMemoTime">
                    {this.props.currentTime}
                    {/* <input
                      className="timer Hour"
                      type="number"
                      placeholder="00"
                      maxlength="2"
                      min="0"
                      max="10"
                    />
                    <span>:</span>
                    <input
                      className="timer Minute"
                      type="number"
                      placeholder="00"
                      min="0"
                      max="59"
                    />
                    <span>:</span>
                    <input
                      className="timer Second"
                      type="number"
                      placeholder="00"
                      min="0"
                      max="59"
                      maxlength="2"
                    /> */}
                  </div>
                </div>
                <textarea
                  className="videoMemoModalMemoArea"
                  maxlength="500"
                  onChange={this.handleMemoChange}
                ></textarea>
              </div>
              <div className="videoMemoModalVideoPart">
                <button
                  className="videoMemoModalVideoBtn"
                  onClick={this.handleMemoSaveBtnClick}
                >
                  save
                </button>
                <div id="alert">{this.state.error}</div>
              </div>
            </div>
            <div
              className="videoMemoModalCloseBtn"
              onClick={this.handelQuitBtnClick}
            >
              <i className="fas fa-times" />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
