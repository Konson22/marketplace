import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import PopupModal from './pages/forms/PopupModal';
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import { useGlobalContext } from './contexts/GlobalContextProvider';
import Footer from './components/Footer';
import ProductsCategories from './pages/products/ProductsCategories';
import ProductsSearch from './pages/products/ProductsSearch';
import ScrollToTop from './helpers/ScrollToTop';

function App() {

  const { openModal } = useGlobalContext()

  return (
    <main className="">
      <Navbar />
      <ScrollToTop />
      {openModal && <PopupModal />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/categories' element={<ProductsCategories />} />
        <Route path='/products/search' element={<ProductsSearch />} />
      </Routes>
      <Footer />
    </main>
  );
}


export default App;