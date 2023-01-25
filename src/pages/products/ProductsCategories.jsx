import { useSearchParams  } from 'react-router-dom'
import { useItems } from "../../contexts/ItemsContextProvider"
import Items from "../../components/Items"
import ProductsNav from './ProductsNav';
import { FaFilter } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import ItemsLoaders from '../../components/Loaders';


export default function ProductsCategories() {

  const { loading, items } = useItems()
  const  [ searchParams ] = useSearchParams()
  const [products, setProducts] = useState([])
  
  const query = searchParams.get('q')
  
  useEffect(() => {
    if(!query){
      setProducts(items)
    }else{
      const results = items.filter(item => item.category === query)
      setProducts(results)
    }
  }, [query, items])

  let content = <ItemsLoaders />

  content = loading && <ItemsLoaders />
  
  content = (!loading && products.length >= 1) ? <Items items={products} /> : `${query} NOT available currently please try later!.`
    
  return (
    <>
    <ProductsNav />
    <div className='md:px-[5%] px-2 pt-4'>
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="md:text-2xl text-lg font-semibold">Results</h1>
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