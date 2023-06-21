import React from 'react';
import css from '../css/hs.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Time from './Time';



function Header() {
    const templatStyle = {
        border: "1px solid red"
    }
    return (
        <>
            <div className='line'>
                <Navbar expand="lg" className="bg-body-tertiary" >
                    <Container>
                        <Navbar.Brand href="#" ><img src='/img/title.svg' alt='로고이미지' className='logo' /></Navbar.Brand>
                    </Container>
                </Navbar >
                <br />
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">ㅇ공지사항</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">ㅇ사연과 공지사항</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">ㅇFAQ</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className='hr' />


                <Container>
                    <Row>
                        <Col xxl={8} className="" style={templatStyle}>lg=8
                            <div className='diagonal' />
                            <span className='textpart'>
                                사람과<br />
                                음악이 고플 때<br />
                                <u>라디오를 켤까요</u><br />
                                이런 저런 일상을 모두와 <u>공유하고</u> 싶을 때,<br />
                                한 순간 떠오른 <u>음악이</u> 듣고 싶을 때<br />
                                켤까요 라디오<br />
                            </span>
                            {/* <span className='textpart2'>
                                    음악이 고플 때
                                </span>
                                <span className='textpart3'>
                                    라디오를 켤까요
                                </span>
                                <span className='textpart4'>
                                    이런 저런 일상을
                                </span>
                                 */}
                        </Col>
                        <Col xxl={4} className="side" style={templatStyle}>
                            <p><Time /></p>
                            <img src='/img/radiomain.png' alt='라디오이미지1' className='mainimg' />
                        </Col>
                    </Row>
                </Container>

            </div >
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