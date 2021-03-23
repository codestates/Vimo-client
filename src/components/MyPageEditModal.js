import React from "react";
import "./css/MyPageEditModal.css";

class MyPageEditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            newPassword: "",
            checkPassword: "",
            errorMessage: "",
        }
    }
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handleConfirm = () => {
        this.props.handleEditModalOnOff();
    }

    render() {
        return (
            <>
                {this.props.display ?
                    <div id="EditModalWholeContainer">
                        <div class="EditModalContainer">
                            <div className="EditModalUserProfile">
                                <img
                                    id="EditModalUserProfilePic"
                                    alt="profilePic"
                                    src="https://i.imgur.com/FP3hraO.png"
                                />
                            </div>
                            <div>
                                <div className="EditModalContentPart">
                                    <span>username</span>
                                    <input className="EditModalContent" onChange={this.handleInputValue("username")}></input>
                                </div>
                                <div className="EditModalContentPart">
                                    <span>currentPassword</span>
                                    <input type="password" className="EditModalContent" onChange={this.handleInputValue("password")}></input>
                                </div>
                                <div className="EditModalContentPart">
                                    <span>NewPassword</span>
                                    <input type="password" className="EditModalContent" onChange={this.handleInputValue("newPassword")}></input>
                                </div>
                                <div className="EditModalContentPart">
                                    <span>NewPasswordCheck</span>
                                    <input type="password" className="EditModalContent" onChange={this.handleInputValue("checkPassword")}></input>
                                </div>
                                <div id="EditModalComfirmBtnContainer">
                                    <button id="EditModalComfirmBtn" onClick={this.handleConfirm}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div id="alert">{this.state.errorMessage}</div>
                        </div>
                    </div> : null

                }
            </>
        )
    }
}

export default MyPageEditModal;