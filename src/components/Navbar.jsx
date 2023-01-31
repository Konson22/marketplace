import { NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import { FiBell, FiUser } from 'react-icons/fi'
import { categories2 } from '../assets/data'
import { useNavigate  } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContextProvider'


export default function Navbar() {

  const { setOpenModal } = useGlobalContext()

  const navigate = useNavigate()
  const inputRef = useRef()

  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleQuerySearch = e => {
    e.preventDefault()
    navigate(`/products?search=${inputRef.current.value}`)
  }

  return (
    <nav className='relative md:h-[5rem] h-[3.5rem] flex items-center justify-between md:px-4 px-2 md:bg-gray-700 bg-gray-700'>
      <div className="md:hidden text-white flex" onClick={() => setIsOpen(!isOpen)}>
        <FaBars className="text-2xl" />
      </div>
      <div className="md:h-[4rem] h-[3rem] flex items-center mr-8  text-white">
        {/* <img src={process.env.PUBLIC_URL+'/images/pngwing.com.png'} alt='buy24/7' /> */}
        <h2 className="md:text-4xl text-3xl flex font-bold"><div className="md:block hidden mr-2">B&S </div><span className="text-red-600">24</span>/7</h2>
      </div>
      <div 
        className={`
          md:flex md:static text-white 
          duration-300 eas-in-out
          absolute md:h-auto h-[100vh] inset-0 z-50 md:bg-transparent light-black-bg2 flex-1
          ${isOpen ? 'translate-x-0' : 'translate-x-[-100%]'}
          md:translate-x-0
        `}
      >
        <ul className='md:flex h-full w-[70%] md:bg-transparent bg-gray-400'>
          <div className="md:hidden h-[3.5rem] flex items-center justify-between bg-gray-500 px-4">
            <h2 className="md:text-4xl text-2xl text-white">C24 <span className="text-red-600">/</span> 7</h2>
            <div className="" onClick={() => setIsOpen(!isOpen)}>
            <FaTimes className="text-2xl" />
          </div>
          </div>
          <li className='md:m-0 px-3 py-2'>
            <NavLink className=" font-semibold md:px-4" to='/' onClick={() => setIsOpen(!isOpen)}>Home</NavLink>
          </li>
          <li className='md:m-0 px-3 py-2'>
            <NavLink className="font-semibold md:px-4" to='/products' onClick={() => setIsOpen(!isOpen)}>Products</NavLink>
          </li>
          <li className='md:m-0 px-3 py-2'>
            <NavLink className="font-semibold md:px-4" to='/services' onClick={() => setIsOpen(!isOpen)}>Services</NavLink>
          </li>
          <li className='md:m-0 px-3 py-2'>
            <NavLink className="font-semibold md:px-4" to='/about' onClick={() => setIsOpen(!isOpen)}>About</NavLink>
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
              <NavLink className='py-1 w-full block' key={index} to={`/products?category=${category.path}`}>
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
          className="md:h-[2.8rem] h-[2.2rem] border-none px-4 bg-red-600 rounded" 
          onClick={() => setOpenModal('upload')}
        >
          <div className="md:block hidden">Start salling</div>
          <div className="md:hidden">Upload</div>
        </button>
        <div className="flex items-center justify-center rounded-full overflow-hidden md:mx-3 mx-2"
          onClick={() => setOpenModal('login')}
        >
          <FiBell className='md:text-3xl text-[1.5rem]' />
        </div>
        <NavLink className="flex items-center justify-center rounded-full overflow-hidden md:mx-3 mx-2" to='/account'>
          <FiUser className='md:text-3xl text-[1.5rem]' />
        </NavLink>
      </div>
    </nav>
  )
}
