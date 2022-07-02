import './App.css';
import Background from './components/template/Backgrond';
import TemplaPrincipal from './components/template/TempPrincipal';
import Registration from './components/template/RegistrationTemplate';
import Login from './components/template/LoginTemplate';
import RecoverPass from './components/template/RecoverPassTemplate';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Background />
      <Routes>
        <Route path='/' element={<TemplaPrincipal />}></Route>
        <Route path='inscreva-se' element={<Registration />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='recover' element={<RecoverPass />}></Route>
      </Routes>
    </div>
  );
}

export default App;
