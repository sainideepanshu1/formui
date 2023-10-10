import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './Components/Signup';
function App() {
  return (
    <BrowserRouter>
      <div className="buttons">
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
