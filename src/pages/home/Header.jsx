import { Link } from "react-router-dom"
import { useGlobalContext } from "../../contexts/GlobalContextProvider"

export default function Header() {

  const { setOpenModal } = useGlobalContext()

  return (
    <div className='header md:h-[60vh] h-[30vh] flex items-center bg-gray-200 md:px-[6%] px-3'>
      <div className='header-hero md:w-[55%] w-full text-white'>
        <h1 className='hidden md:text-5xl text-2xl font-bold'>There’s nothing quite like the thrill of finding a great bargain</h1>
        <h1 className='md:text-6xl text-2xl font-bold'>All items, every day, are better than before</h1>
        <p className="text-2xl mt-3 font-semibold hidden md:block">Join million of shoppers and be one of our customers There’s nothing quite like the thrill of finding a great bargain</p>
        <div className='flex items-center md:mt-8 mt-4'>
          <Link className='md:px-4 md:py-3 px-3 py-2 bg-red-600 rounded mr-3' to='/products'>Start Shopping</Link>
          <div 
            className='md:px-4 md:py-3 px-3 py-2 bg-red-600 rounded' 
            onClick={() => setOpenModal('upload')}
          >
            Start Salling
          </div>
        </div>
      </div>
    </div>
  )
}
  