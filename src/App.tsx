import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Routes, Route, Outlet, Link, 
  Navigate, useLocation, useNavigate,
} from "react-router-dom";
import Slider from './Components/Slider';
import { useAuth } from './Contexts/Auth';
import useString from './Hooks/StringState';

function App() {
  let auth = useAuth();
  let location = useLocation();
  let navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const [username, setUsername] = useString();
  const [password, setPassword] = useString();
  const [message, setMessage] = useState<string>("");

  const handleLogin = () => {
    if (auth.signin(username, password)) {
      reset();
      navigate(from, { replace: true });
    } else {
      setMessage("유저 이름이나 비밀번호를 확인하세요.");
    }
  }

  const handleSignup = () => {
    if (username.length === 0) {
      setMessage("유저 이름을 입력해주세요");
    } else if (password.length === 0) {
      setMessage("비밀번호를 입력해주세요");
    } else if (auth.signup(username, password)) {
      reset();
      navigate(from, { replace: true });
    } else {
      setMessage("가입에 실패했습니다.");
    }
  }

  const reset = () => {
    setUsername("");
    setPassword("");
    setMessage("");
  }
  
  return (
    <>
      <LinkPage />
      <Routes>
        {/* homepage */}
        <Route path="/" element={<Slider />}>
        </Route>
        {/* login */}
        <Route path="login" element={
          <div>
            login<br/>
            유저 이름 <input className="border-2 border-black" type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} required /><br/>
            비밀번호 <input className="border-2 border-black" type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required /><br/>
            <button className="border-2 border-black" onClick={() => handleLogin()}>로그인하기</button><br/>
            {message}
          </div>
        } />
        {/* sign up */}
        <Route path="signup" element={
          <div>
            signup<br/>
            유저 이름 <input className="border-2 border-black" type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} required /><br/>
            비밀번호 <input className="border-2 border-black" type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required /><br/>
            <button className="border-2 border-black" onClick={() => handleSignup()}>가입하기</button><br/>
            {message}
          </div>} 
        />
        {/* article */}
        <Route path="article">
          {/* article page */}
          <Route path=":id" element={<div>article</div>} />
          {/* article edit */}
          <Route path="write" element={
            <RequireAuth>
              <div>write</div>
            </RequireAuth>
          } />
        </Route>
        {/* user profile */}
        <Route path="profile">
          <Route path=":id" element={<div>profile</div>} />
        </Route>
        {/* default 404 page */}
        <Route path="*" element={<div>unsupported page</div>} />
      </Routes>
    </>
  );
}

function LinkPage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/article/write">article write</Link>
          </li>
          <li>
            <Link to="/article/1">article /:id</Link>
          </li>
          <li>
            <Link to="/profile/1">profile /:id</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default App;
