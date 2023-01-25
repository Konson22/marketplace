import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkedAlt, FaPhoneAlt, FaWhatsapp  } from 'react-icons/fa'
import { FiMail  } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className='md:px-[5%] px-3 md:py-16 py-8 bg-gray-700 text-white md:mt-16 mt-8'>
        <div className='md:flex justify-between'>
            <div className="md:flex-1 w-full mr-12">
                <h3 className="md:text-xl font-semibold mb-2">Subcribe</h3>
                <div className="flex h-[3.2rem] w-full bg-white rounded-r overflow-hidden mb-3">
                    <input type="search" placeholder='Search...' className='h-full bg-transparent focus:border-none focus:outline-none flex-1 px-3' />
                    <button className="h-full bg-red-600 text-white px-3">Search</button>
                </div>
                <p className="">
                    Join million of shoppers and be one of our customers There’s nothing
                </p>
            </div>
            <div className="md:flex justify-between">
                {/* <div className="md:ml-20 mt-8 md:mt-0">
                    <h3 className="md:text-xl font-semibold mb-2">Categories</h3>
                    <ul>
                        <li className="py-2">About</li>
                        <li className="py-2">Address</li>
                        <li className="py-2">Services</li>
                        <li className="py-2">Services</li>
                    </ul>
                </div> */}
                <div className="md:ml-20 mt-8 md:mt-0">
                    <h3 className="md:text-xl font-semibold mb-2">Social media</h3>
                    <ul className="flex justify-evenlyy md:block">
                        <li className='flex items-center py-2'><FaTwitter className='md:text-2xl text-4xl md:mr-3 mr-5' /> <span className="hidden md:block">@facebook.com/buy24/7</span></li>
                        <li className='flex items-center py-2'><FaFacebook className='md:text-2xl text-4xl md:mr-3 mr-5' /> <span className="hidden md:block">@facebook.com/buy24/7</span></li>
                        <li className='flex items-center py-2'><FaInstagram className='md:text-2xl text-4xl md:mr-3 mr-5' /> <span className="hidden md:block">@facebook.com/buy24/7</span></li>
                    </ul>
                </div>
                <div className="md:ml-20 mt-8 md:mt-0">
                    <h3 className="md:text-xl font-semibold mb-2">Address & contacts</h3>
                    <ul>
                        <li className="flex items-center py-2"><FaMapMarkedAlt className='text-2xl mr-2' /> Malakia, Next to Mall</li>
                        <li className="flex items-center py-2"><FaPhoneAlt className='text-2xl mr-2' /> 0920079070</li>
                        <li className="flex items-center py-2"><FaWhatsapp className='text-2xl mr-2' /> 0920079070</li>
                        <li className="flex items-center py-2"><FiMail className='text-2xl mr-2' /> konsonak@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex justify-center border-t pt-4 mt-4">
            <span>&copy; copyright reserve for buy24/7 2023</span>
        </div>
    </footer>
  )
}
