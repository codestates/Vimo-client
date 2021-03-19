import React from "react";
import { withRouter } from "react-router";
import "./css/MyPage.css";
import MyVideoListEntry from "../components/MyVideoListEntry";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      newPassword: "",
      checkPassword: "",
      errorMessage: "",
      usermemo: ""
    };
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handelQuitBtnClick = this.handelQuitBtnClick.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handelQuitMemo = this.handelQuitMemo.bind(this);
    this.handleVideoMemo = this.handleVideoMemo.bind(this);
  }

  handelQuitMemo = () => {
    document.getElementById('memo').style.display = "none";
  }

  handelQuitBtnClick = () => {
    document.getElementById('editModal').style.display = "none";
  }

  handleHomeClick = () => {
    this.props.history.push("/");
  };

  handleEditClick = () => {
    document.getElementById('editModal').style.display = "block";
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleConfirm = () => {
    if(this.state.newPassword !== this.state.checkPassword) {
      this.setState({
        errorMessage: "새로운비밀번호가 다릅니다"
      })
    }else{
      alert("확인되었습니다");
    }
  }

  handleVideoMemo = () => {
    document.getElementById("memo").style.display = "block";
  }

  render() {
    return (
      <div>
        <nav className="Nav">
          <button className="myhome" onClick={() => this.handleHomeClick()}>home</button>
          <span className="logo">VIMO</span>
          <span className="logout">logout</span>
        </nav>
        <div id="userInfoBox">
          <div id="imgBox">이미지</div>
          <div id="userInfo">
            <div id="nameBox">
              <span id="username">유저네임</span>
              <button id="editBtn" onClick={this.handleEditClick}>edit</button>
            </div>
            <div id="emailBox">
              <span id="email">이메일</span>
            </div>
            <div id="countBox">
              <span className="count">영화본횟수: 12</span>
              <span className="count">메모횟수: 12</span>
              <span className="count">총회원수: 12</span>
            </div>
          </div>
        </div>
        <div id="myContents">
          <MyVideoListEntry handleVideoMemo={this.handleVideoMemo}>
          </MyVideoListEntry>
          <MyVideoListEntry handleVideoMemo={this.handleVideoMemo}>
          </MyVideoListEntry>
        </div>
        <div id="btnContainer">
          <button id="extend">펼치기</button>
        </div>
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
        <div id="memo" class="modal">
          <div class="modal-content">
            <div class="close" onClick={this.handelQuitMemo}>&times;</div>                                                            
            <div>{this.state.usermemo}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MyPage);
