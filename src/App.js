import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import Users from './components/Users';

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} /> 
        <Route path='/dashboard' element={<UserDashboard />} /> 
        <Route path='/users' element={<Users />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
