import logo from './logo.svg';
import './App.css';

import { PageContainer } from './components/pageContainer';
import { Menu } from './components/menu';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('HOME')

  const handlePageChange = (e) => {
    setCurrentPage(e.target.innerText)
  }

  return (
    <div className='bg-dark-blue h-screen relative'>
      <PageContainer currentPage={currentPage} />
      <Menu currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;
