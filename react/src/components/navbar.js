import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Box,
} from '@mui/material';

function NavBar() {

  return (
    <>
      <AppBar component='nav' position='static'>
        <Container style={{ padding: '0' }} maxWidth='lg'>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Button variant='text' color='inherit' component={Link} to='/'>Home</Button>
              <Button variant='text' color='inherit' component={Link} to='about'>About</Button>
              <Button variant='text' color='inherit' component={Link} to='contact'>Contact</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
