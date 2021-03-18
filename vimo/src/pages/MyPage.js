import React from "react";
import { withRouter } from "react-router";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>MyPage</h1>
        <button onClick={() => this.handleClick()}>이동!</button>
      </div>
    );
  }
}

export default withRouter(MyPage);
