import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './scss/app.scss';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';

const App = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <div className="wrapper">
        <Header search={search} setSearch={setSearch} />
        <div className="content">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home search={search} />}
              ></Route>
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
