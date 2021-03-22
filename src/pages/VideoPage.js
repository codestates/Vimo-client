import React from "react";
import { withRouter } from "react-router";
import "./css/VideoPage.css";
import VideoMemoModal from "../components/VideoMemoModal";

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "annoymous",
      discription: "영화 줄거리, 내용, 랜더링됩니다",
      display: false,
    };
    this.handelQuitBtnClick = this.handelQuitBtnClick.bind(this);
  }
  handleHomeClick = () => {
    this.props.history.push("/");
  };

  handleMyPageClick = () => {
    this.props.history.push("/mypage");
  };

  handelMemoBtnClick = () => {
    this.setState({
      display: true
    })
  }

  handelQuitBtnClick = () => {
    this.setState({
      display: false
    })
  }

  render() {
    return (
      <div className="VideomainContainer">
        <VideoMemoModal display={this.state.display} handelQuitBtnClick={this.handelQuitBtnClick} />
        <nav className="VideoNavBar">
          <div className="videoNavLogo" alt="logo" onClick={() => this.handleHomeClick()} />
          <div className="videoNavUserContainer">
            <img
              className="videoNavProfilePic"
              alt="profilePic"
              src="https://i.imgur.com/FP3hraO.png"
              onClick={() => this.handleMyPageClick()}
            />
            <div className="videoNavUsernameBox">
              <div className="videoNavUsername">{this.state.username}</div>
            </div>
          </div>
        </nav>
        <div id="videoVideoPlayerContainer">
          <video
            src="" width="1280px" height="720px" poster=""
            controls
            autoplay
            loop
          >
          </video>
          <div id="videoDescriptionContainer">
            <div id="videoDescription">{this.state.discription}</div>
            <button id="videoMemoBtn" onClick={this.handelMemoBtnClick}>memo</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoPage);
