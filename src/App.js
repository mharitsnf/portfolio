import logo from './logo.svg';
import './App.css';

import { PageContainer } from './components/pageContainer';
import { Menu } from './components/menu';

function App() {
  return (
    <div className='bg-dark-blue h-screen relative'>
      <PageContainer/>
      <Menu/>
    </div>
  );
}

export default App;
