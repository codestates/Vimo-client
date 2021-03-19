import React from "react";

class MyVideoListEntry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    handleVideoMemo = () => {
        this.props.handleVideoMemo();
    }

    render() {
        return(
            <div className="videoContainer">
                <div className="video" onClick={()=>this.handleVideoMemo()}></div>
                <div className="video" onClick={this.handleVideoMemo}></div>
                <div className="video" onClick={this.handleVideoMemo}></div>
                <div className="video" onClick={this.handleVideoMemo}></div>
            </div>
            
        )
    }
}

export default MyVideoListEntry;