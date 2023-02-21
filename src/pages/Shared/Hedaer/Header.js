import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const linkData = [
        { id: 'home', text: 'Home', link: '/' },
        { id: 'about', text: 'About', link: '/' },
        { id: 'blog', text: 'Blog', link: '/' },
        { id: 2, text: 'Reading History', link: '/history' },   
        { id: "contact", text: 'Contact', link: '/' },
        // { id: 5, text: 'Admin', link: '/dashboard' },
    ];

    return (
        <Navbar bg="light" expand="lg" style={{ position: "sticky",
            top: 0, zIndex: 50, background: 'transparet', borderBottom: '2px solid #009688'}}>
            <Container>
                <Navbar.Brand className='text-success' style={{fontSize:'25px', fontWeight:'bold'}}>SAFETY<span className='text-dark'>_</span><span className=' text-warning'>FIRST</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                       
                        {
                            linkData.map((item, i) => <Link key={i} onClick={()=>{handleClickScroll(item.id)}}
                                 to={`${item.link}`} className='f-bold p-2' style={{textDecoration:'none', fontWeight:'bold', color:'#009688'}}>
                                    {item.text}
                                    </Link>
                                    )
                        }
                        <Link to='/dashboard' className='btn btn-success p-2' style={{textDecoration:'none', fontWeight:'bold', color:'#fff'}}>Admin</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;