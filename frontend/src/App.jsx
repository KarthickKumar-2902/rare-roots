// import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import About from './components/About';
// import AddProducts from './components/AddProducts';
import Explore from './components/Explore';
import Home from './components/Home';
import Login from './components/Login';
import Myposts from './components/Myposts';
import NewHeader from './components/NewHeader';
import Postinfo from './components/Postinfo';
import Posts from './components/Posts';
import Register from './components/Register';
import './App.css'

function Layout() {
  return (
    <>
      <NewHeader />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/myproducts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore/:id" element={<Postinfo />} />
        <Route path='/myproducts/myposts' element={<Myposts />} />
        {/* <Route path='/add' element={<AddProducts />} /> */}
      
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} /></Route>
    </Routes>
  );
}

export default App;
