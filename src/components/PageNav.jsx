import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink } from 'react-router-dom';

function PageNav() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"  className='fw-bold'>Book Vibe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav  ">

        <Nav className="me-auto"></Nav>

          <Nav className="text-center me-auto">
           
            <NavLink to='/' className="nav-link">Home</NavLink>
            <NavLink to='/book-list' className="nav-link">Listed Books</NavLink>
            <NavLink to='/read-books' className="nav-link">Pages to Read</NavLink>

          </Nav>

          <Nav className='text-center'>
            <button className='btn btn-primary'>Sign In</button>
            <button className='btn btn-info ms-3'>Sign Up</button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNav;