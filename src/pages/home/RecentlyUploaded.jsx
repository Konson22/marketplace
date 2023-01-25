import Items from "../../components/Items"
import { useItems } from "../../contexts/ItemsContextProvider"

export default function RecentlyUploaded() {

  const { loading, items } = useItems()

  return (
    <div className='md:px-[10%] px-2 md:mt-16 py-6 md:py-12 bg-gray-100'>
      <h1 className="md:text-2xl text-xl">Recently uploaded</h1>
      <div className="md:mt-4 mt-2">
        {loading && 'Loading...'}
        {/* {(!loading && error ) && 'error...'} */}
        {(!loading && items.length >= 1) && <Items items={items} bg='bg-white' />}
      </div>
    </div>
  )
}
  