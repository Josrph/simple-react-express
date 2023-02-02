import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NavBar from './components/navbar';


function App() {
  return (
    <>
      <NavBar />

      <Container component='main' maxWidth='lg'>
        <Routes>

          <Route path='/'>
            <Route index element={<Home />} />
            <Route index path='page/:pageIdx' element={<Home />} />
          </Route>

          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />

          <Route path='*' element={<Typography variant='h3'>Page Not Found</Typography>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
