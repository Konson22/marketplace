import { NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FiBell } from 'react-icons/fi'
import { categories2 } from '../assets/data'
import { useNavigate  } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContextProvider'


export default function Navbar() {

  const { setOpenModal } = useGlobalContext()

  const navigate = useNavigate()
  const inputRef = useRef()

  const [open, setOpen] = useState(false)

  const handleQuerySearch = e => {
    e.preventDefault()
    navigate(`/products/search?q=${inputRef.current.value}`)
  }

  return (
    <nav className='md:h-[5rem] h-[3.3rem] flex items-center justify-between md:px-4 px-2 md:bg-gray-700 bg-red-600 sticky z-index-10 left-0'>
      <div className="md:h-[4rem] h-[3rem] flex items-center mr-8">
        <img src={process.env.PUBLIC_URL+'/images/pngwing.com.png'} alt='buy24/7' />
      </div>
      <div className="md:flex hidden flex-1">
        <ul className='flex'>
          <li>
            <NavLink className="text-white font-semibold px-4" to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className="text-white font-semibold px-4" to='/products'>Products</NavLink>
          </li>
          <li>
            <NavLink className="text-white font-semibold px-4" to='/services'>Services</NavLink>
          </li>
          <li>
            <NavLink className="text-white font-semibold px-4" to='/about'>About</NavLink>
          </li>
        </ul>
      </div>
      <div className="md:flex hidden">
        <div 
          className="h-[2.8rem] flex items-center bg-white rounded-l relative cursor-pointer px-3 border-r"
          onMouseEnter={() => setOpen(true)} 
          onMouseLeave={() => setOpen(false)}
        >
          <span>Categories</span>
          <FaChevronDown className={`text-sm opacity-7 ml-2 duration-500 ${open ? 'rotate-180':''}`} />
          {open && <div className="absolute top-[102%] w-[150%] left-0 bg-gray-100 rounded px-4">
            {categories2.map((category, index) => (
              <NavLink className='py-1 w-full block' key={index} to={`/products/categories?q=${category.path}`}>
                {category.title}
              </NavLink>
            ))}
          </div>}
        </div>
        <form className="flex h-[2.8rem] w-[400px] bg-white rounded-r overflow-hidden" onSubmit={handleQuerySearch}>
          <input 
            className='h-full bg-transparent focus:border-none focus:outline-none flex-1 px-3' 
            placeholder='Search...' 
            type="search" 
            ref={inputRef}
          />
          <button type='submit' className="h-full bg-red-600 text-white px-3">Search</button>
        </form>
      </div>
      <div className="flex items-center ml-3 text-white">
        <button 
          className="md:h-[2.8rem] h-[2.2rem] border-none px-4 md:bg-red-600 bg-red-400 rounded" 
          onClick={() => setOpenModal('upload')}
        >
          <div className="md:block hidden">Start salling</div>
          <div className="md:hidden">Upload</div>
        </button>
        {/* <div 
          className="md:hidden flex items-center justify-center rounded-full overflow-hidden"
          onClick={() => setOpenModal('upload')}
        >
          <FiPlus className='text-2xl' />
        </div> */}
        <div className="flex items-center justify-center rounded-full overflow-hidden md:mx-3 mx-2">
          <FiBell className='text-3xl' />
        </div>
        <div className="flex items-center">
          <div className="md:h-[2rem] h-[2.2rem] md:w-[2rem] rounded-full overflow-hidden">
            <img src={process.env.PUBLIC_URL+'/images/kon.png'} alt='buy24/7' />
          </div>
          <span className="text-sm md:block hidden ml-2">Kon</span>
        </div>
      </div>
    </nav>
  )
}
