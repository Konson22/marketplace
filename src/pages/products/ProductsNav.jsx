import { FiSearch } from 'react-icons/fi'
import { categories2 } from "../../assets/data";
import { Link  } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import { useRef, useState } from 'react';
import { useNavigate  } from 'react-router-dom'


export default function ProductsNav() {

    const navigate = useNavigate()
    const inputRef = useRef()
    const [open, setOpen] = useState(false)

    const handleQuerySearch = e => {
        e.preventDefault()
        navigate(`/products/search?q=${inputRef.current.value}`)
    }

  return (
    <div className="flex items-center justify-between border-b py-3 md:px-[5%] px-2">
        <ul className="md:flex hidden">
            <li className="flex border cursor-pointer py-2 px-3 mr-3">
                <Link to='/products/categories'> All </Link>
            </li>
            {categories2.map(category => (
                <li className="flex border p-2 cursor-pointer mr-2" key={category.path}>
                    <Link to={`/products/categories?q=${category.path}`}>
                        {category.title}
                    </Link>
                </li>
            ))}
        </ul>
        <div 
            className="h-[2.8rem] md:hidden flex items-center bg-gray-100 rounded-l relative cursor-pointer px-2 mr-2 border"
            onClick={() => setOpen(!open)}
        >
            <span>Filter</span>
            <FaChevronDown className={`text-sm opacity-7 ml-2 duration-300 ${open ? 'rotate-180':''}`} />
            {open && <div className="absolute top-[105%] w-[200%] left-0 bg-gray-100 rounded border-2 px-4">
                <Link className='py-1 cursor-pointer w-full block' to='/products/categories'>
                    All
                </Link>
                {categories2.map(category => (
                <Link className='py-1 cursor-pointer w-full block' to={`/products/categories?q=${category.path}`} key={category.path}>
                    {category.title}
                </Link>
                ))}
            </div>}
        </div>
        <form 
            className="flex h-[2.8rem] flex-1 bg-gray-100 rounded relative" 
            onClick={() => setOpen(false)}
            onSubmit={handleQuerySearch}
        >
        <input 
            className='h-full bg-transparent focus:border-none focus:outline-none w-full px-3' 
            type="search" 
            placeholder='Search...' 
            ref={inputRef}
        />
        <button type='submit' className="flex items-center h-full md:bg-red-700 md:text-white md:px-3 pr-3">
            <FiSearch className='md:hidden' />
            <span className="md:block hidden">Search</span>
        </button>
        {/* {(queryCategories.length >= 1 && queryText) && <div className="dropdown-scroll absolute z-10 top-[102%] left-0 bg-gray-100 rounded px-4">
            {queryCategories?.map((category, index) => (
            <div className='py-1 w-full' key={index} onClick={() => setQueryText(category.title)}>
                {category.title}
            </div>
            ))}
        </div>} */}
        </form>
  </div>
  )
}
