import Link from 'next/link';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">CST</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <NavDropdown title="Questions">
              <Link href="/test?s=id" passHref>
                <NavDropdown.Item>ID</NavDropdown.Item>
              </Link>
              <Link href="/test?s=class" passHref>
                <NavDropdown.Item>CLASS</NavDropdown.Item>
              </Link>
              <Link href="/test?s=tag" passHref>
                <NavDropdown.Item>TAG</NavDropdown.Item>
              </Link>
              <Link href="/test?s=etc" passHref>
                <NavDropdown.Item>ETC</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;