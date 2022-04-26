import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from'./components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Sign from './components/Sign';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login/*" element={<Login />}></Route>
              <Route path="/sign/*" element={<Sign />}></Route>
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
