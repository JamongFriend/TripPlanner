import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Account.css';

function Account() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        // 로그인 요청 보내기
        const response = await axios.post('/login', { email, password });
        
        if (response.data.success) {
          // 로그인 성공 시 리다이렉트
          history.push('/dashboard');
        }
      } catch (err) {
        setError('Login failed. Please check your credentials.');
      }
    };
    return (
        <div>
            <div className='signAndRegister'>
                <div className='signAndRegister_outLineBox'>
                    <div className='signAndRegister_contentBox'>
                        <div className='contentBox'>
                            <form onSubmit={handleSubmit}>
                                <div className='login_register_topTitle'>로그인 / 회원가입</div>
                                <div className='inputEmail'>
                                    <div className='inputPadding'>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            placeholder="이메일을 입력하세요"
                                        />
                                    </div>
                                </div>
                                <div className='inputPassword'>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="비밀번호호을 입력하세요"
                                    />
                                </div>
                                {error && <p>{error}</p>}
                                <button type="submit">로그인</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>            
    </div>
    );
}

export default Account;