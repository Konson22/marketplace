import { FaGoogle, FaTwitter, FaFacebook, FaTimes } from "react-icons/fa"
import { FiLock, FiUser } from "react-icons/fi"
import { useGlobalContext } from "../../contexts/GlobalContextProvider"


export default function Login() {

    const { setOpenModal } = useGlobalContext()
    
    
  return (
    <div className='md:w-[30%] w-full md:p-6 p-4 m-4 rounded bg-white relative' onClick={e => e.stopPropagation()}>
        <div className="absolute cursor-pointer right-2 top-2" onClick={() => setOpenModal(null)}>
            <FaTimes className='text-xl' />
        </div>
        <div className="">
            <h2 className="text-xl md:font-semibold text-center">Login with</h2>
            <div className="flex items-center justify-evenly mt-4">
                <div className="rounded-full md:p-3 p-2 text-red-500 border border-red-300 bg-gray-200">
                    <FaGoogle className='text-2xl' />
                </div>
                <div className="rounded-full md:p-3 p-2 text-blue-700 border border-blue-400 bg-gray-200">
                    <FaTwitter className='text-2xl' />
                </div>
                <div className="rounded-full md:p-3 p-2 text-blue-600 border border-blue-300 bg-gray-200">
                    <FaFacebook className='text-2xl' />
                </div>
            </div>
        </div>
        <div className="mt-8">
            <h2 className="text-xl md:font-semibold text-center">Login with E-mail</h2>
            <form className=''>
                <div className="mb-5">
                    <label className='mx-1' htmlFor='email'>E-mail</label>
                    <div className="h-12 flex items-center bg-gray-100 border rounded overflow-hidden mt-1">
                        <span className="h-full flex items-center px-3 bg-gray-200">
                            <FiUser className='text-2xl' />
                        </span>
                        <input 
                            className='h-full focus:border-none bg-transparent focus:outline-none w-full border-none px-3'
                            name='email'
                            type='email'
                            placeholder='Enter E-mail Address'
                        />
                    </div>
                </div>
                <div className="mb-5">
                    <label className='mx-1' htmlFor='email'>Password</label>
                    <div className="h-12 flex items-center bg-gray-100 border rounded overflow-hidden mt-1">
                        <span className="h-full flex items-center px-3 bg-gray-200">
                            <FiLock className='text-2xl' />
                        </span>
                        <input 
                            className='h-full focus:border-none bg-transparent focus:outline-none w-full border-none px-3'
                            name='password'
                            type='password'
                            placeholder='Enter Password'
                        />
                    </div>
                </div>
                <button className="w-full px-3 py-2  my-2 rounded border-none bg-green-700 mr-3 text-white" type='submit'>Submit</button>
                <div className="mt-2">
                    I don't have account <span className="text-blue-700" onClick={() => setOpenModal('signup')}>Sign up</span>
                </div>
            </form>
        </div>
    </div>
  )
}
