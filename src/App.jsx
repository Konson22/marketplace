import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import PopupModal from './pages/forms/PopupModal';
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import { useGlobalContext } from './contexts/GlobalContextProvider';
import Footer from './components/Footer';
import ScrollToTop from './helpers/ScrollToTop';
import ProductDetail from './pages/products/ProductDetail';
import Account from './pages/account/Account';

function App() {

  const { openModal } = useGlobalContext()

  return (
    <main className="bg-gray-100">
      <Navbar />
      <ScrollToTop />
      {openModal && <PopupModal />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/detail/:productId' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </main>
  );
}


export default App;