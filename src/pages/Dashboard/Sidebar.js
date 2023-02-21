
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import { FaPlusCircle ,FaSms,FaCheckSquare,FaList,FaHome,FaSignOutAlt} from 'react-icons/fa'

import './Sidbar.css'

const Sidebar = () => {
    const handleLogout = () => {
        localStorage.removeItem('safe-token');
        // <Navigate to='/admin@saefty/login'></Navigate>
      }
    const listData = [
        { id: 1, text: 'Add Blog', link: 'addBlog' ,icon:<FaPlusCircle/> },
        { id: 2, text: 'Blog List', link: 'blogList', icon:<FaList/>},
        { id: 3, text: 'Inbox', link: 'message' ,icon:<FaSms/>},
        { id: 4, text: 'Subscriber', link: 'subscriberList',icon:<FaCheckSquare/> },
        { id: 5, text: 'Back To Home', link: '/' ,icon:<FaHome/>},
    ];
    return (
        <Navbar className="navbar flex-column h-full " expand="md">
            <Link to="" className=' link text-dark mb-2 p-2 text-center bg-light ' style={{ fontSize: '18px' }}>Dashboard</Link>
            <NavbarToggle className='m-2 bg-light' />
            <NavbarCollapse navbar='true'>
                <Nav className=" flex-column" navbar>
                    {
                        listData.map(item => <NavItem key={item.id} className='my-2 pb-1' >
                            <Link className='link p-2  border-bottom d-flex align-items-center ' to={`${item.link}`}>
                                <span className='me-2 mb-2' style={{fontSize:'30px'}}>{item.icon}</span> {item.text}
                                </Link>
                        </NavItem>
                        )
                    }
                         <NavItem className='my-1 pb-1'>
                            <Link onClick={()=>handleLogout()} className='link p-2 btn btn-warning d-flex justify-content-center align-items-center ' to=''>
                            <span className='me-2 mb-2' style={{fontSize:'30px'}}>
                                <FaSignOutAlt/> </span>Log Out</Link>
                        </NavItem>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    );
};

export default Sidebar;

