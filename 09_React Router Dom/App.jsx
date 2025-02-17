import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Login from './login';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
};

export default App;