import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import MainPage from "./pages/MainPage";
import VideoPage from "./pages/VideoPage";
import MyPage from "./pages/MyPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      videoUrl: "./videos/video1.mp4",
      memoProfilePic: "./images/vimo_logo.png",
      memoUsername: "Anonymous",
      memoContent:
        "헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 법원은 최고법원인 대법원과 각급법원으로 조직된다. 법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다.",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.changeVideoUrl = this.changeVideoUrl.bind(this);
  }
  handleLogin() {
    this.setState({ isLogin: true });
  }
  handleLogout() {
    this.setState({ isLogin: false });
  }
  componentDidUpdate() {
    console.log("성공!!!!");
    console.log(this.state.isLogin);
  }
  changeVideoUrl(newUrl) {
    this.setState({ videoUrl: newUrl });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage
              handleLogin={this.handleLogin}
              changeVideoUrl={this.changeVideoUrl}
              memoProfilePic={this.memoProfilePic}
              memoUsername={this.memoUsername}
              memoContent={this.memoContent}
            />
          </Route>
          <Route path="/video">
            <VideoPage videoUrl={this.state.videoUrl} />
          </Route>
          <Route path="/mypage">
            <MyPage handleLogout={this.handleLogout} />
          </Route>
        </Switch>
      </div>
    );
  }
  // state = {
  //   name: "",
  // };

  // componentDidMount() {
  //   axios
  //     .get("https://vimo.link")
  //     .then((res) => {
  //       this.setState({ name: res.data });
  //     })
  //     .catch((err) => alert("서버연결 실패"));
  // }

  // render() {
  //   return <h1>Hello, {this.state.name}</h1>;
  // }
}

export default App;
