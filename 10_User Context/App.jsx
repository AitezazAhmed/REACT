import React, { useContext } from 'react';
import { DataContext } from '../usercontext';
import Header from './header';

const App = () => {
  const data = useContext(DataContext);
  console.log(data);

  return (
    <div>
      <h1>Hey, I am App.jsx </h1>
      <Header/>
    </div>
  );
};

export default App;
