import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  const navItems = [
    { title: '플래너 생성', path: '/create' },
    { title: '내 플래너', path: '/plans' },
    { title: '플래너 공유', path: '/share' },
    { title: '북마크', path: '/bookmarks' },
    { title: '여행지 추천', path: '/recommend' },
    { title: '지도', path: '/map' },
  ];

  return (
    <header>
      <div className="mainHeader">
        <div className='hd_Inner'>
          <div className='hd_Top'>
            {/* 로고 */}
            <div className='hd_LogoLayout'>
              <a className="logo" href='/Main'></a>
            </div>

            {/* 검색창 */}
            <div id='hd_SearchLayout'>
              <div id='hd_searchBoxMain'>
                <div id='hd_sc_box'>
                  <input type="text" placeholder="여행지, 항공권 검색..." />
                </div>
                <div id='hd_sc_button'>
                  <button>검색</button>
                </div>
              </div>
            </div>

            {/* 상단 기능 */}
            <div className='hd_func'>
              <div className='hd_f_option'>
                <div className='hd_f_op_help'>
                  <Link to="/help">고객센터</Link>
                </div>
                <div className='hd_f_op_language'>
                  <div className='hd_f_dop_lg_icon'>
                    <Link to="/language">언어</Link>
                  </div>
                </div>
                <div className='hd_f_op_user'>
                  <div>
                    <Link to="/Account">사용자</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 네비게이션 바 */}
          <div className='headerNavBar'>
            <ul className='headerNavBarInner'>
              {navItems.map((item, index) => (
                <li key={index} className="nav_bar_item">
                  <Link className="nav_bar_lnk" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
