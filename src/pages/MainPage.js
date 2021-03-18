import React from "react";
import { withRouter } from "react-router";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.props.history.push("/video");
  };

  render() {
    return (
      <div>
        <nav>내브</nav>
        <h3>안녕하세요</h3>
        <h2> 안녕안녕</h2>
        <h1>MainPage</h1>
        <button onClick={() => this.handleClick()}>이동!</button>
        <footer>푸터</footer>
      </div>
    );
  }
}

export default withRouter(MainPage);
