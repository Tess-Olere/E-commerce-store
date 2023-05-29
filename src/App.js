import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Category from './pages/Category';
import CategoryId from './pages/CategoryId';
import Products from './pages/Products';
import ProductId from './pages/ProductId';
import Search from './pages/Search';
import { StateContext } from './lib/ContextApi';
import { Toaster } from 'react-hot-toast';
import Cart from './pages/Cart';


function App() {
  return (
    <>
    <StateContext>
      <Toaster />
    <NavBar />
    <Routes>
    <Route path='/' element={<Home />}/> 
    <Route path='categories' element={<Category />} > 
    <Route path=':categoryid' element={<CategoryId />} /> 
    </Route>
    <Route path='products' element={<Products />} > 
    <Route path=':productid' element={<ProductId />} /> 
    </Route>
    <Route path='search' element={<Search />} /> 
    <Route path='cart' element={<Cart />} /> 
    </Routes>
    <Footer />
    </StateContext>
    </>
  );
}

export default App;
