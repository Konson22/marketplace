import { useItems } from "../../contexts/ItemsContextProvider"
import { FaFilter } from 'react-icons/fa'
import Items from "../../components/Items"
import ProductsNav from "./ProductsNav";
import ItemsLoaders from "../../components/Loaders";


export default function Products() {

  const { loading, items } = useItems()

  let content = <ItemsLoaders />

  content = loading && <ItemsLoaders />
  
  content = (!loading && items.length >= 1) ? <Items items={items} /> : 'No products found!.'
  
  return (
    <>
    <ProductsNav />
    <div className='md:px-[5%] px-2 pt-4'>
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="md:text-2xl text-lg font-semibold">Products</h1>
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