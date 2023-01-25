import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../contexts/GlobalContextProvider'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiBell, FiUser } from 'react-icons/fi'
import { categDt } from '../../assets/data'
import { NavDropdown } from 'react-bootstrap'
import './css/navbar.css'
import { useState } from 'react'


export default function Navbar(){

    const { profile, setShowForm } = useGlobalContext()
    const [isOpen, setIsOpen] = useState(false)

    const authUserActions = (
        <>
            <button className="nav-button btn sm-hide" onClick={() => setShowForm('upload')}>
                Start salling
            </button>
            <NavLink className="nav-button btn lg-hide" to='/upload'>
                Upload
            </NavLink>
            <div className="nav-icon-wraper">
                <FiBell />
            </div>
            <div className="nav-icon-wraper">
                <FiUser />
            </div>
        </>
    )

    const guestUserActions = (
        <button className="nav-button btn" onClick={() => setShowForm('login')}>
            <span className="">Login </span>
            <span className="sm-hide">| Signup</span>
        </button>
    )
   
    // NAVIGATIONS LINKS
    const navigationsLinks = (
        <div className={`nav-link-wraper ${isOpen ? 'show' : ''}`}>
            <ul className='d-flex'>
                <li>
                    <NavLink className='my-link' to='/' onClick={() => setIsOpen(!isOpen)}>Home</NavLink>
                </li>
                <li>
                    <NavLink className='my-link' to='/products/all' onClick={() => setIsOpen(!isOpen)}>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink className='my-link' to='/' onClick={() => setIsOpen(!isOpen)}>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink className='my-link' to='/' onClick={() => setIsOpen(!isOpen)}>
                        About
                    </NavLink>
                </li>
                {/* {categDt.map((link, index) => (
                    <li key={index}>
                        <NavLink className='my-link' to={`/products/${link.url}`} onClick={() => setIsOpen(!isOpen)}>
                            {link.text}
                        </NavLink>
                    </li>
                ))} */}
            </ul>
        </div>
    )

    return(
        <nav className='appbar-wraper d-flex align-items-center justify-content-between'>
            <div className="logo-wraper d-flex align-items-center">
                <div className="nav-icon-wraper menu-bar-icon" onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <FaBars /> : <FaTimes />}
                </div>
                <img src={process.env.PUBLIC_URL+'/images/pngwing.com.png'} alt='' />
            </div>
            {navigationsLinks}
            <div className="search-container d-flex align-items-center">
                <div className="search-bar d-flex align-items-center">
                    <input type="search" placeholder='Search' />
                    <button type="submit">Search</button>
                </div>
                <div className="categories">
                    <NavDropdown title='Categories'>
                        {categDt.map((link, index) => (
                            <NavDropdown.Item key={index}>
                                {link.text}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </div>
            </div>
            <div className="nav-buttons-wraper d-flex align-items-center">
                {/* <NavLink className="nav-icon-wraper home-icon" to='/'>
                    <FiHome />
                </NavLink> */}
                {profile ? authUserActions : guestUserActions}
                
            </div>
        </nav>
    )
}
