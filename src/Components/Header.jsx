import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand href="#home" className='text-light'>
            <img
              alt=""
              src="https://e7.pngegg.com/pngimages/894/582/png-clipart-computer-icons-windows-media-player-opera-miscellaneous-orange.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Media-Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
