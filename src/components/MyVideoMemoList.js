import React from "react";
import "./css/MyVideoMemoList.css";

class MyVideoMemoList extends React.Component {
    constructor(props) {
        super(props);
    }
    handleVideoMemo = (data) => {
        this.props.handleVideoMemo(data);
    }

    render() {
        const { data } = this.props;
        return (
            <div className="MyVideoMemoContainer">
                <img
                    className="MyVideoMemoThumbnail"
                    alt="MemoThumbnail"
                    onClick={() => this.handleVideoMemo(data)}
                    src={data.video.thumbnail} />
                <div className="MyVideoMemo"></div>
            </div>
        )
    }
}

export default MyVideoMemoList;