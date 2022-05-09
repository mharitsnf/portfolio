import './App.css';
import { Outlet } from 'react-router-dom';

import { Menu } from './components/menu';
import { Header } from './components/header';

function App() {
  return (
    <div className="bg-dark-blue h-screen relative">
        <Header/>
        <Outlet />
        <Menu />
    </div>

);
}

export default App;
