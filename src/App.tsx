import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Card from './components/Card';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import { withRequireAuth } from './components/RequireAuth';

function App() {
  return (
    <>
      <LinkPage />
      <Routes>
        <Route path='/' element={
          <div className='grid p-8 grid-cols-4 gap-8'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        }>
        </Route>
        {/* login */}
        <Route path='login' element={<SigninPage />} />
        {/* sign up */}
        <Route path='signup' element={<SignupPage />} />
        {/* article */}
        <Route path='article'>
          {/* article page */}
          <Route path=':id' element={<div>article</div>} />
          {/* article edit */}
          <Route path='write' element={(withRequireAuth(<div>write</div>))} />
        </Route>
        {/* user profile */}
        <Route path='profile'>
          <Route path=':id' element={<div>profile</div>} />
        </Route>
        {/* default 404 page */}
        <Route path='*' element={<div>unsupported page</div>} />
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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>signup</Link>
          </li>
          <li>
            <Link to='/article/write'>article write</Link>
          </li>
          <li>
            <Link to='/article/1'>article /:id</Link>
          </li>
          <li>
            <Link to='/profile/1'>profile /:id</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
