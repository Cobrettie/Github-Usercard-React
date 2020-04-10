import React from 'react';
import './App.css';
import NavMenu from './Components/NavMenu/NavMenu';
import UserCard from './Components/UserCard/UserCard';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <h1>Welcome To Your GitHub User Card, Built With React</h1>
      <UserCard />
    </div>
  );
}

export default App;
