import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Slider from './Components/Slider';

function App() {
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
        <Route path="login" element={<div>login</div>} />
        <Route path="signup" element={<div>signup</div>} />
        <Route path="article">
          <Route path=":id" element={<div>article</div>} />
          <Route path="write" element={<div>write</div>} />
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

export default App;
