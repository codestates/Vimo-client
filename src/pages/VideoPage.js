import React from "react";
import { withRouter } from "react-router";
import "./css/VideoPage.css";

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.handleHomeClick = this.handleClick.bind(this);
    //this.handleMyPageClick = this.handleClick.bind(this);
  }
  handleHomeClick = () => {
    this.props.history.push("/");
  };

  handleMyPageClick = () => {
    this.props.history.push("/mypage");
  };

  handelMemoBtnClick = () => {
    document.getElementById('myModal').style.display = "block";
  }

  handelQuitBtnClick = () => {
    document.getElementById('myModal').style.display = "none";
  }

  render() {
    return (
      <div>
        <nav className="Nav">
          <button className="home" onClick={() => this.handleHomeClick()}>홈으로</button>
          <span className="logo">VIMO</span>
          <div className="myImg" onClick={() => this.handleMyPageClick()}>img</div>
        </nav>
        <div id="videoPlayer">
          <video
          src="" width="1280px" height="720px" poster="" 
          controls
          autoplay
          loop
          ></video>
          <div id="descriptionBox">
            <div id="videoInfo">description</div>
            <button id="memoBtn" onClick={this.handelMemoBtnClick}>memo</button>
          </div>
        </div>
        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close" onClick={this.handelQuitBtnClick}>&times;</span>                                                               
            <div id="timeBox">Time</div>
            <div id="textMemoBox">
              <input id="textBox" type="text"></input>
              <button>memo</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoPage);
