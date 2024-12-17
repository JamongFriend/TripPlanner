import React from 'react';

function Header() {
  return (
    <header>
      <h1>여행 플래너</h1>
      <div className="mainHeader">
        <div className='hd_Inner'>
            <div className='hd_Top'>
                <div className='hd_LogoLayout'>
                    <a />
                </div>
                <div id='hd_SearchLayout'>
                    <div>
                        <div>
                            <div id='hd_searchBoxMain'>
                                <div id='hd_sc_box'>

                                </div>
                                <div id='hd_sc_button'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hd_func'>
                    <div className='hd_f_option'>
                        <div className='hd_f_op_help'>
                            <a/>
                        </div>
                        <div className='hd_f_op_language'>
                            <div className='hd_f_dop_lg_icon'>
                                <a/>
                            </div>
                        </div>
                        <div className='hd_f_op_user'>
                            <div>
                                <a/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='headerNavBar'>
                <div className='headerNavBarInner'>
                    <li className='nav_bar_item'>
                        <a id='' className='nav_bar_lnk' href='' title='플래너 생성'/>
                    </li>
                    <li className='nav_bar_item'>
                        <a id='' className='nav_bar_lnk' href='' title='내 플래너'/>
                    </li>
                    <li className='nav_bar_item'>
                        <a id='' className='nav_bar_lnk' href='' title='플래너 공유'/>
                    </li>
                    <li className='nav_bar_item'>
                        <a id='' className='nav_bar_lnk' href='' title='북마크'/>
                    </li>
                    <li className='nav_bar_item'>
                        <a id='' className='nav_bar_lnk' href='' title='여행지 추천'/>
                    </li>
                    <li className='nav_bar_item'>
                        <a id='' className='nav_bar_lnk' href='' title='지도'/>
                    </li>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;