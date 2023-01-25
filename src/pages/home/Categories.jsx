import { Link } from "react-router-dom";
import { categories2 } from "../../assets/data";

export default function Categories() {
    return (
      <div className='md:px-[10%] px-2 md:mt-4 mt-3 mb-8'>
        <h1 className="md:text-2xl text-xl">Categories</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-2 md:mt-4 mt-2">
          {categories2.map((category, index) => (
            <Link 
              className='flex items-end text-white justify-center md:h-[12rem] h-[7rem] md:p-3 p-1' 
              key={index} 
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 65%, rgba(0, 0, 0, 0.8)), url(${category.image})`, 
                backgroundSize:'100% 100%'
              }}
              to={`/products/categories?q=${category.path}`}
            >
              <p className="md:text-xl md:font-bold font-semibold">{category.title}</p>
            </Link>
          ))}
        </div>
      </div>
    )
  }
  