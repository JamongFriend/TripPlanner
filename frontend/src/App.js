import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Account from './components/Account';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Account" element={<Account />} />
      <Route path='/Register' element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
