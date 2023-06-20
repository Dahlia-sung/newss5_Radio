import React from 'react';
import css from '../css/hs.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


/* const Header = () => {
    return (
        <div className='title'>
            <div className='title_logo'>
                <img src='img/title.svg' alt='로고이미지' />
            </div>
        </div>
    );
}
 */
function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className='logo'><img src='/img/title.svg' alt='로고이미지' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/About">회사소개(About)</Nav.Link>
                        <Nav.Link href="/Community">커뮤니티(Community)</Nav.Link>
                        <Nav.Link href="/QnA">자주묻는질문(QnA)</Nav.Link>
                        <Nav.Link href="/Location">회사위치(Location)</Nav.Link>
                    </Nav>
                    {/* https://react-bootstrap.netlify.app/docs/forms/form-control */}
                    {/* d-flex는 flex 적용 의미함 */}
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;