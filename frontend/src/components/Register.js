import React from 'react';

function Register() {
    return (
      <div className='register_wrap'>
      <div className='register_outLineBox' onSubmit={handleSubmit}>
          <div className='register_content'>
              <div className='content_box'>
                  <div className='email_wrap'>
                      <div className='content_title'>
                          <div className='email_title'>이메일</div>
                      </div>
                      <div className='input_box'>
                          <input
                              type="text"
                              name="email"
                              value={formData.planName}
                              onChange={handleChange}
                              placeholder="이메일을 입력하세요"
                          />
                      </div>
                  </div>
                  <div className='password_wrap'>
                      <div className='content_title'>
                          <div className='password_title'>비밀번호</div>
                      </div>
                      <div className='input_box'>
                          <input
                              type="number"
                              name="password"
                              value={formData.personnel}
                              onChange={handleChange}
                              placeholder="비밀번호를 입력하세요"
                          />
                      </div>
                  </div>
                  <div className='check_password_wrap'>
                      <div className='content_title'>
                          <div className='check_password_title'>비밀번호 확인</div>
                      </div>
                      <div className='input_box'>
                          <input
                              type="text"
                              name="check_password"
                              value={formData.purpose}
                              onChange={handleChange}
                              placeholder="비밀번호를 입력하세요"
                          />
                      </div>
                  </div>
                  <div className='name_wrap'>
                      <div className='content_title'>
                          <div className='name_title'>이름</div>
                      </div>
                      <div className='kakaoMap_wrap'>
                          <div id='map'></div>
                      </div>
                      <div className='input_box'>
                          <input
                              type="text"
                              name="name"
                              value={formData.place}
                              onChange={handleChange}
                              placeholder="여행 장소를 입력하세요"
                          />
                      </div>
                  </div>
                  <div className='phone_wrap'>
                      <div className='content_title'>
                          <div className='phone_title'>전화번호</div>
                      </div>
                      <div className='input_box'>
                          <input
                              type="text"
                              name="phone"
                              value={formData.startDate}
                              onChange={handleChange}
                          />
                      </div>
                  </div>
                  <div className='check_phone_wrap'>
                      <div className='content_title'>
                          <div className='check_phone_title'>전화번호 인증</div>
                      </div>
                      <div className='input_box'>
                          <input
                              type="text"
                              name="check_phone"
                              value={formData.hotel}
                              onChange={handleChange}
                              placeholder="인증번호를 입력하세요"
                          />
                      </div>
                  </div>
                  <div className='plan_description_wrap'>
                      <div className='content_title'>
                          <div className='plan_description_title'>플래너 설명</div>
                      </div>
                      <div className='input_description_box'>
                          <textarea
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                              placeholder="플래너 설명을 입력하세요"
                          />  
                      </div>
                  </div>
                  <div className='register_button_wrap'>
                      <button
                          type="submit"
                          className='register_button'>
                              회원가입
                          </button>
                  </div>
              </div>

          </div>

      </div>

  </div>
      );
}

export default Register;