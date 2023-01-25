import { NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { categDt } from '../assets/data'



export default function CategoriesDropdown({color=''}){
    return(
        <div className='category-dropdown-wraper'>
            <NavDropdown title='Filter' className='categories text-dark'>
                <NavDropdown.Item>
                    <NavLink className='nav-link text-dark' to='/products/all'>All</NavLink>
                </NavDropdown.Item>
                {categDt.map((link, index) => (
                    <NavDropdown.Item key={link.url}>
                        <NavLink className='nav-link text-dark' to={`/products/${link.url}`}>{link.text}</NavLink>
                    </NavDropdown.Item>
                ))}
            </NavDropdown>
        </div>
    )
}