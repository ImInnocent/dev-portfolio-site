import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Routes, Route, Outlet, Link, 
  Navigate, useLocation, useNavigate,
} from "react-router-dom";
import Slider from './Components/Slider';
import { useAuth } from './Contexts/Auth';

function App() {
  let auth = useAuth();
  let location = useLocation();
  let navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    auth.signin();
    navigate(from, { replace: true });
  }
  
  return (
    <>
      <LinkPage />
      <Routes>
        <Route path="/" element={<Slider />
          // <div className="App">
          //   <header className="App-header">
          //     <img src={logo} className="App-logo" alt="logo" />
          //     <p>
          //       Edit <code>src/App.tsx</code> and save to reload.
          //     </p>
          //     <a
          //       className="App-link"
          //       href="https://reactjs.org"
          //       target="_blank"
          //       rel="noopener noreferrer"
          //     >
          //       Learn React
          //     </a>
          //   </header>
          // </div>
        }>
        </Route>
        <Route path="login" element={
          <div>
            login
            <button onClick={handleLogin}>로그인하기</button>
          </div>
        } />
        <Route path="signup" element={<div>signup</div>} />
        <Route path="article">
          <Route path=":id" element={<div>article</div>} />
          <Route path="write" element={
            <RequireAuth>
              <div>write</div>
            </RequireAuth>
          } />
        </Route>
        <Route path="profile">
          <Route path=":id" element={<div>profile</div>} />
        </Route>
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
