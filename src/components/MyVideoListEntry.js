import React from "react";

class MyVideoListEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleVideoMemo = () => {
        this.props.handleVideoMemo();
    }

    render() {
        return (
            <div className="MyPageVideoContainer">
                <div className="MyPageVideo" onClick={() => this.handleVideoMemo()}></div>
                <div className="MyPageVideo" onClick={this.handleVideoMemo}></div>
                <div className="MyPageVideo" onClick={this.handleVideoMemo}></div>
                <div className="MyPageVideo" onClick={this.handleVideoMemo}></div>
            </div>
        )
    }
}

export default MyVideoListEntry;