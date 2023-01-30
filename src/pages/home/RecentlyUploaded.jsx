import Items from "../../components/Items"
import ItemsLoaders from "../../components/Loaders"
import { useItems } from "../../contexts/ItemsContextProvider"

export default function RecentlyUploaded() {

  const { loading, items } = useItems()

  let content = <ItemsLoaders />

  content = loading && <ItemsLoaders />
  
  content = (!loading && items.length >= 1) ? <Items items={items} /> : 'No products found!.'

  return (
    <div className='md:px-[10%] px-2 md:mt-16 py-6 md:py-12 bg-gray-100'>
      <h1 className="md:text-2xl text-xl">Recently uploaded</h1>
      <div className="md:mt-4 mt-2">
        { content }
      </div>
    </div>
  )
}
  