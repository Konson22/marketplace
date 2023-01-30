import { useSearchParams } from 'react-router-dom'
import { useItems } from "../../contexts/ItemsContextProvider"
import { FaFilter } from 'react-icons/fa'
import Items from "../../components/Items"
import ProductsNav from "./ProductsNav";
import ItemsLoaders from "../../components/Loaders";
import { useState } from 'react';
import { useEffect } from 'react';
// import { ProductsApi } from '../../apis/productsApi';
// import { useQuery } from '@tanstack/react-query'


export default function Products() {

  // const { status, data } = useQuery({
  //   queryKey:['products'],
  //   queryFn:ProductsApi
  // })

  
  const { loading, items } = useItems()   
  const [selectedItems, setSelectedItems] = useState([])

  const [ searchParams ] = useSearchParams()
  const searchQuery = searchParams.get('search')
  const categoryQuery = searchParams.get('category')
  
  useEffect(() => {
      if(!searchQuery && !categoryQuery){
          setSelectedItems(items)
      }else if(searchQuery){
          const results = items.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
          setSelectedItems(results)
      }else if(categoryQuery){
          const results = items.filter(item => item.category === categoryQuery)
          setSelectedItems(results)
      }
  }, [categoryQuery, items, searchQuery])

  let content = <ItemsLoaders />
  content = loading && <ItemsLoaders />
  
  content = (!loading && selectedItems.length >= 1) ? <Items items={selectedItems} /> : 'No products found!.'
    
  return (
    <>
      <ProductsNav />
      <div className='md:px-[5%] px-2 pt-4 bg-gray-100'>
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="md:text-2xl text-lg font-semibold">Products page</h1>
          </div>
            <div className="flex items-center px-3 py-2 border rounded">
            <FaFilter className="text-base mr-1" />
            <span className="text-[.8rem]">Sort A-Z</span>
          </div>
        </div>
        <div className="mt-4">
          { content }
        </div>
      </div>
    </>
  )
}
