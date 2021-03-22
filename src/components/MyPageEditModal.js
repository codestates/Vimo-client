import React from "react";

class MyPageEditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    render() {
        return (
            <div id="editModal" class="modal">
                <div class="editmodal-content">
                    <div class="close" onClick={this.handelQuitBtnClick}>&times;</div>
                    <div id="editImg">img</div>
                    <div>
                        <div className="editText">
                            <span>새로운유저내임</span>
                            <input className="editInput" onChange={this.handleInputValue("username")}></input>
                        </div>
                        <div className="editText">
                            <span>현재비밀번호</span>
                            <input type="password" className="editInput" onChange={this.handleInputValue("password")}></input>
                        </div>
                        <div className="editText">
                            <span>새로운비밀번호</span>
                            <input type="password" className="editInput" onChange={this.handleInputValue("newPassword")}></input>
                        </div>
                        <div className="editText">
                            <span>비밀번호확인</span>
                            <input type="password" className="editInput" onChange={this.handleInputValue("checkPassword")}></input>
                        </div>
                        <div id="confirmBtnBox">
                            <button type="password" id="confirm" onClick={this.handleConfirm}>confirm</button>
                        </div>
                    </div>
                    <div id="alert">{this.state.errorMessage}</div>
                </div>
            </div>
        )
    }
}

export default MyPageEditModal;