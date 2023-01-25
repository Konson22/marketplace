import { useItems } from "../../contexts/ItemsContextProvider"
import CategoriesDropdown from "../../components/CategoriesDropdown"
import SearchBar from "../../components/SearchBar"
import { useParams } from 'react-router-dom'
import { categDt } from '../../assets/data'
import Items from "../../components/Items"
import { useEffect, useState } from 'react'
import './css/products.css'
import SpecialItems from "./SpecialItems"


export default function Products(){

    const { category } = useParams()
    const { loading, errors, items } = useItems()
    const [subCategoryQuery, setSubCategoryQuery] = useState('')

    const currentItems = (category === 'all' ) ? items : items.filter(item => {
        return subCategoryQuery ? item.sub_category === subCategoryQuery : item.category === category
    })


    useEffect(() => setSubCategoryQuery(''), [category])

    const subcategory = categDt.find(c => c.url === category)?.subcategory

    const subcategoriesContent = subcategory && (
        <div className="suncategories-container flex-grow-1 d-flex align-items-center">
            <span onClick={() => setSubCategoryQuery('')}>All</span>
            {subcategory.map(subcat => (
                <span key={subcat} onClick={() => setSubCategoryQuery(subcat)}>{subcat}</span>
            ))}
        </div>
    )

    return(
        <main className='page-wraper'>
            <div className="seconary-navbar">
                <div className="d-flex align-items-center">
                    <div className="lg-hide">
                        <CategoriesDropdown />
                    </div>
                    <div className="sm-hide flex-grow-1">
                        {subcategory && subcategoriesContent}
                    </div>
                    <SearchBar />
                </div>
                <div className="lg-hide w-100 mt-3">
                    {subcategoriesContent}
                </div>
            </div>
            <div className="products-wraper d-flex">
                <div className="products-sidebar sm-hide">
                    <SpecialItems />
                </div>
                <div className="products-content">
                    {loading && 'Loading...'}
                    {(!loading && errors) && 'error occures!'}
                    {(!loading && currentItems.length >= 1) ? <Items items={currentItems} col='4' /> : 'No items' }
                </div>
            </div>
        </main>
    )
}