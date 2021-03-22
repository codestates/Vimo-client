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
    };
  }

  handelQuitBtnClick = () => {
    this.props.handelQuitBtnClick();
  };

  handleMemoChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleMemoSaveBtnClick = () => {
    if (this.state.content === "") {
      alert("메모를 적어주세요");
    } else {
      axios
        .post(
          "https://server.vimo.link/insert/memo",
          {
            userId: this.state.userId,
            videoId: this.state.videoId,
            content: this.state.content,
            videoTime: this.state.videoTime,
          },
          { "Content-Type": "application/json", withCredentials: true }
        )
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => alert(err));
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
                    <input
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
                    />
                  </div>
                </div>
                <textarea
                  className="videoMemoModalMemoArea"
                  maxlength="100"
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
