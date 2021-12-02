import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useString from '../hooks/useString';
import { useAuth } from '../contexts/Auth';

export default function SignupPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || '/';

  const [username, setUsername] = useString();
  const [password, setPassword] = useString();
  const [message, setMessage] = useState<string>('');

  /**
   * 입력 데이터 초기화
   */
  const reset = () => {
    setUsername('');
    setPassword('');
    setMessage('');
  }

  /**
   * 가입하기 버튼을 눌렀을 때 호출
   * 가입 성공 시 이전 페이지로 이동
   */
  const handleSignup = () => {
    if (username.length === 0) {
      setMessage('유저 이름을 입력해주세요');
    } else if (password.length === 0) {
      setMessage('비밀번호를 입력해주세요');
    } else if (auth.signup(username, password)) {
      reset();
      navigate(from, { replace: true });
    } else {
      setMessage('가입에 실패했습니다.');
    }
  }

  return (
    <div>
      signup<br/>
      유저 이름 <input className='border-2 border-black' type='text' id='username' name='username' value={username} onChange={e => setUsername(e.target.value)} required /><br/>
      비밀번호 <input className='border-2 border-black' type='password' id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} required /><br/>
      <button className='border-2 border-black' onClick={() => handleSignup()}>가입하기</button><br/>
      {message}
    </div> 
  );
}
