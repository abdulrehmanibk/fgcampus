import { Route, Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import { Home } from './Screens/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Courses from './Screens/Courses/Courses';
import Error from './Components/Error/Error';
import React from 'react';
import Register from './Screens/Register/Register';
import Teacher from './Screens/Teacher/Teacher';
import About from './Screens/About/About';
import Pricing from './Screens/Pricing/Pricing';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<Courses />} />
        <Route path="/teachers/:id" element={<Teacher />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about/fgcampus" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
