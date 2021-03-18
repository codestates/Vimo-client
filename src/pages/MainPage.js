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
        <h1>MainPage</h1>
        <h2></h2>
        <button onClick={() => this.handleClick()}>이동!</button>
      </div>
    );
  }
}

export default withRouter(MainPage);
