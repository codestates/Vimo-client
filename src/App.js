import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import MainPage from "./pages/MainPage";
import VideoPage from "./pages/VideoPage";
import MyPage from "./pages/MyPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/video">
            <VideoPage />
          </Route>
          <Route path="/mypage">
            <MyPage />
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
