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
        <>
            <div className='line'>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/" className='logo'><img src='/img/title.svg' alt='로고이미지' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/Notice">공지사항</Nav.Link>
                                <Nav.Link href="/Community">사연과 공지사항</Nav.Link>
                                <Nav.Link href="/FAQ">FAQ</Nav.Link>
                            </Nav>
                            {/* https://react-bootstrap.netlify.app/docs/forms/form-control */}
                            {/* d-flex는 flex 적용 의미함 */}

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className='TopTest px-5 fixed top-0 left-0 right-0 z-[30] bg-white undefined'>
                <div className='logo_'><img src='/img/title.svg' alt='로고이미지' /></div>
                <div className='me-auto- hidden md:flex space-x-[12px] xl:space-x-[14px] justify-end items-center motion-safe:transition-transform motion-safe:ease-[cubic-bezier(0.65,0,0.35,1)] motion-safe:duration-[500ms] translate-y-0'></div>
                <div className='test'><a href="/Notice">공지사항</a></div>
                <div className='test'><a href="/Community">사연과 공지사항</a></div>
                <div className='test'><a href="/FAQ">FAQ</a></div>
            </div >
        </>
    );
}

export default Header;