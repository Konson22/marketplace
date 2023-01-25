import { useItems } from "../../contexts/ItemsContextProvider"
import { FaSearch } from "react-icons/fa";
import { useParams, Link, useNavigate } from 'react-router-dom'
import { categories } from '../../assets/data'
import Items from "../../components/Items"
import { NavDropdown } from 'react-bootstrap'
import { useRef } from 'react'
import './css/products.css'


export default function Categories(){

    const { category } = useParams()
    const { loading, errors, items } = useItems()
    const queryRef = useRef()
    const navigate = useNavigate()
    
    const handleSearch = e => {
        e.preventDefault()
        const value = queryRef.current.value
        value && navigate('/search', { state:value })
    }

    const categoryList = category.split('&')

    // const subcategory = categories.find(c => c.url === categoryList[0])?.subcategory
    

    // const searchResults = items.filter(item => item.title.toLowerCase().includes(queryString.toLowerCase()))
   
    const selectedCategory = items.filter(item => {
        if(category === 'all') return items
        if(categoryList.length > 1){
            return item.category === categoryList[0] && item.sub_category === categoryList[1]
        }else{
            return item.category === categoryList[0]
        }
    })
    


    const subcategoriesContent = (
        <ul className="suncategories-container nav flex-grow-1 d-flex align-items-center">
            <Link className='nav-link' to={`/products/all`}>All</Link>
            {categories.map(category => (
                <li className="nav-item">
                <Link className='nav-link' key={category.url} to={`/products/${category.url}`}>{category.text}</Link>
                    </li>
            ))}
        </ul>
    )
    

    return(
        <main className='page-wraper'>
            <div className="seconary-navbar">
                <div className="d-flex align-items-center justify-content-between">
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
                    <div className="sm-hide flex-grow-1">
                        {subcategoriesContent}
                    </div>
                    <form className="search-bar-container d-flex">
                        <input type="search" placeholder='Search...' ref={queryRef} />
                        <button type='submit' onClick={handleSearch}><FaSearch /></button>
                    </form>
                </div>
                {/* <div className="lg-hide w-100 mt-3">
                    {subcategoriesContent}
                </div> */}
            </div>
            <div className="products-wraper">
                {loading && 'Loading...'}
                {(!loading && errors) && 'error occures!'}
                {selectedCategory.length >= 1 ? <Items items={selectedCategory} col='col5' /> : 'category Not found'}
                {/* {queryString ?
                    <div>
                        {searchResults.length >= 1 ? 
                            <Items items={searchResults} col='4' /> : 
                            'Your Search not found...'
                        }
                    </div>:
                    selectedCategory.length >= 1 ? <Items items={selectedCategory} col='4' /> : 'category Not found'
                } */}
            </div>
        </main>
    )
}


// function ResultContent(){
//     return(

//     )
// }