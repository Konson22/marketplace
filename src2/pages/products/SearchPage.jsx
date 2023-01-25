import { useItems } from "../../contexts/ItemsContextProvider"
import SearchBar from "../../components/SearchBar"
import { useLocation, Link } from 'react-router-dom'
import { categories } from '../../assets/data'
import Items from "../../components/Items"
import { NavDropdown } from 'react-bootstrap'
import { useState } from 'react'
import './css/products.css'


export default function SearchPage(){

    const location = useLocation()
    const { loading, errors, items } = useItems()
    const [queryString, setQueryString] = useState(location.state ? location.state : '')
    
    const handleSearchQuery = str => {
        setQueryString(str)
    }

    const searchResults = items.filter(item => item.title.toLowerCase().includes(queryString.toLowerCase()))
   

    return(
        <main className='page-wraper'>
            <div className="seconary-navbar">
                <div className="d-flex align-items-center">
                    <div className='category-dropdown-wraper lg-hide'>
                        <NavDropdown title='Filter' className='categories text-dark'>
                            <NavDropdown.Item className=''>
                                <Link className='nav-link text-dark py-1' to='/products/all'>All categories</Link>
                            </NavDropdown.Item>
                            {categories.map((link, index) => (
                                <NavDropdown.Item key={link.url}>
                                    <Link className='nav-link text-dark py-1' to={`/products/${link.url}`}>{link.text}</Link>
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </div>
                    <SearchBar handleSearch={handleSearchQuery} />
                </div>
            </div>
            <div className="products-wraper">
                {loading && 'Loading...'}
                {(!loading && errors) && 'error occures!'}
                {(searchResults.length >= 1) ?
                    <Items items={searchResults} col='col5' /> : 
                    'Your Search not found...'
                }
            </div>
        </main>
    )
}

