import { FaImage } from 'react-icons/fa'

export default function ItemsLoaders() {
  return (
    <div className="grid md:grid-cols-5 grid-cols-2 md:gap-3 gap-2">
        {[...Array(10)].map(item => (
            <div className='bg-gray-100 rounded overflow-hidden cursor-pointer' key={item}>
                <div className="md:h-[11rem] h-[8rem] flex items-center justify-center bg-gray-200">
                    <FaImage className='text-[5rem] opacity-10' />
                </div>
                <div className="p-2 pb-3">
                    <span className='block rounded h-2  w-[90%] bg-gray-200 mb-2'></span>
                    <span className='block rounded h-2  w-[80%] bg-gray-200 mb-2'></span>
                    {/* <span className='block rounded h-2  w-[70%] bg-gray-200 mb-2'></span> */}
                    <div className="flex items-center justify-between md:mt-4 mt-3">
                        <span className='block rounded h-4 w-[40%] bg-gray-200'></span>
                        <span className="md:h-6 h-4 md:w-[30%] w-[40%] bg-gray-200 rounded">
                        </span>
                    </div>
                </div>
           </div>
        ))}
    </div>
  )
}
