import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <Navbar bg='info' expand='md' variant='dark'>
            <Container>
                <Navbar.Brand>
                    <Nav.Link as={NavLink} to='/'>
                        Cocktails
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <Nav.Link as={NavLink} to='/'>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/about'>
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
