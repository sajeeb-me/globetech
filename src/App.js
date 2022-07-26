import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Services from './pages/Services/Services';
import LoginForm from './pages/Login/LoginForm';
import RegisterForm from './pages/Login/RegisterForm';

function App() {
  return (
    <section className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} >
          <Route index element={<LoginForm />} />
          <Route path='loginForm' element={<LoginForm />} />
          <Route path='registerForm' element={<RegisterForm />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;