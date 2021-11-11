import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import useString from '../Hooks/StringState';
import { useAuth } from '../Contexts/Auth';

export default function SigninPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  const [username, setUsername] = useString();
  const [password, setPassword] = useString();
  const [message, setMessage] = useState<string>("");

  const reset = () => {
    setUsername("");
    setPassword("");
    setMessage("");
  }

  const handleLogin = () => {
    if (auth.signin(username, password)) {
      reset();
      navigate(from, { replace: true });
    } else {
      setMessage("유저 이름이나 비밀번호를 확인하세요.");
    }
  }

  return (
    <div>
      login<br/>
      유저 이름 <input className="border-2 border-black" type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} required /><br/>
      비밀번호 <input className="border-2 border-black" type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required /><br/>
      <button className="border-2 border-black" onClick={() => handleLogin()}>로그인하기</button><br/>
      {message}
    </div>
  );
}
