
import React from 'react';
import { Link } from 'react-router-dom';

const frontImgImg = require("./images/frontImg.jpg");
const plusImg = require("./images/+.png");

function Main() {
    return (
        <div>
            <div id="body" role="main">
                <div id="groupA" className="leftSide">
                    <div className="userInfo">
                        <div className='infoBox'>
                            <div className='begLogin'>
                                <p>19Project</p>
                                <p>로그인을 진행하세요</p>
                            </div>
                            <div className='userArea2'>
                                <ol>
                                    <li><Link  to="/Login">로그인</Link></li>
                                    <li><Link  to="/Account">회원가입</Link></li>
                                    <li><Link  to="/Account">아이디/비밀번호찾기</Link></li>
                                </ol>
                            </div>
                        </div>
                        <div className='writing'>
                            <a href="#">글쓰기</a>
                        </div>
                    </div>
                <div className="allMenu">
                    <hr />
                    <div className="myWriting">
                        <ul>
                            <li><a href="#">내가 쓴 글</a></li>
                            <li><a href="#">좋아요 글</a></li>
                            <li><a href="#">댓글 단 글</a></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="allWriting">
                        <ul>
                            <li><a href="#">전체글</a></li>
                            <li><a href="#">공지사항</a></li>
                            <li><a href="#">자유게시판</a></li>
                            <li><a href="#">정보게시판</a></li>
                        </ul>
                    </div>
                    <hr />
                  </div>
                </div>    
                <div id="groupB" className="rightSide">
                    <div className='greetings'>
                        <h1>19project</h1>
                        <p>흥애 우리 만든다 웹사이트 흥애
                          여러 기능을 가진 흥애 웹사이트 흥애
                        </p>
                    </div>
                    <hr />
                    <div className='announcement'>
                        <h3>공지사항</h3>
                        <a href="#">
                            <img src={plusImg} width="20" height="20" />
                        </a>
                        <div className='announcementList'>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul> 
                        </div>
                    </div>
                    <hr />
                    <div className='freeBoard'>
                        <h3>자유게시판</h3>
                        <a href="#">
                            <img src={plusImg} width="20" height="20" />
                        </a>
                        <div className='freeBoardList'>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul> 
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Main;
