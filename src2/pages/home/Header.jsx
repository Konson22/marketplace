import { Link } from 'react-router-dom'
import { useGlobalContext } from "../../contexts/GlobalContextProvider";


export default function Header() {

  const { setShowForm } = useGlobalContext()
  

  return (
    <header>
      <div className='header-hero'>
        <h1 className='sm-hide'>There’s nothing quite like the thrill of finding a great bargain</h1>
        <h1 className='lg-hide'>All items, every day, are better than before</h1>
        <div className='d-flex align-items-center mt-3'>
          <Link className='header-button btn text-white' to='/products/all'>Start Shopping</Link>
          <button className='header-button btn text-white sm-hide' onClick={() => setShowForm('upload')}>Start Salling</button>
          <Link className='header-button btn text-white lg-hide' to='/upload'>Start Salling</Link>
        </div>
      </div>
    </header>
  )
}
