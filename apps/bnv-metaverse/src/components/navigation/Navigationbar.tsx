/* eslint-disable jsx-a11y/img-redundant-alt */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navigationbar.module.css';
import Image from 'react-bootstrap/Image';
import MetamaskAuth from '../metamask/MetamaskAuth';

function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{ width: '45px', height: '45px' }}>
          <Image
            src="/bnv.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.navbarToggler}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className={styles.navLinkStyle} eventKey="1" href="/">
              Home
            </Nav.Link>
            <Nav.Link className={styles.navLinkStyle} eventKey="2" href="/">
              SHOWROOM
            </Nav.Link>
            <Nav.Link className={styles.navLinkStyle} eventKey="3" href="/">
              MARKET
            </Nav.Link>
            <Nav.Link className={styles.navLinkStyle} eventKey="4" href="/">
              STORIES
            </Nav.Link>
            <Nav.Link className={styles.navLinkStyle} eventKey="5" href="/">
              ABOUT
            </Nav.Link>
            <Nav.Link className={styles.navLinkStyle} eventKey="6">
              <MetamaskAuth />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
