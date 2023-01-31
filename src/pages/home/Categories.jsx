import { Link } from "react-router-dom";
import { categories2 } from "../../assets/data";
import { LazyImage } from "../../components/LazyImage";

export default function Categories() {
    return (
      <div className='md:px-[10%] px-2 md:mt-4 mt-3 mb-8'>
        <h1 className="md:text-2xl text-xl">Categories</h1>
        <div className="grid md:grid-cols-4 grid-cols-3 md:gap-3 gap-2 md:mt-4 mt-2">
          {categories2.map((category, index) => (
            <Link 
              className='relative text-white md:h-[12rem] h-[6rem] bg-gray-200 z-10' 
              key={index} 
              to={`/products?category=${category.path}`}
            >
                <LazyImage className='absolute h-full w-full inset-0 z-10' src={category.image} />
                <p className="absolute w-full bottom-2 left-2 md:text-xl md:font-bold font-semibold">{category.title}</p>
            </Link>
          ))}
        </div>
      </div>
    )
  }
  