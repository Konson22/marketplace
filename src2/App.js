import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoader } from './components/Loaders';
import Footer from './components/footer';
import Navbar from "./components/appbar";
import { useGlobalContext } from './contexts/GlobalContextProvider';
import ScrollToTop from './helpers/ScrollToTop';

const Home = lazy(() => import('./pages/home/Home'))
const Categories = lazy(() => import('./pages/products/Categories'))
const SearchPage = lazy(() => import('./pages/products/SearchPage'))
const Upload = lazy(() => import('./pages/forms/Upload'))
const Login = lazy(() => import('./pages/forms/Login'))
const FormsModal = lazy(() => import('./pages/forms/FormsModal'))
const Register = lazy(() => import('./pages/forms/Register'))
const ProductDetail = lazy(() => import('./pages/products/ProductDetail'))

function App() {
  
  const { showForm } = useGlobalContext()

  return (
    <div className='app-wraper'>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        { showForm && <FormsModal /> }
        <div className='app-content'>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/products/:category' element={<Categories />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/product/detail/:itemId' element={<ProductDetail />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}


export default App;
