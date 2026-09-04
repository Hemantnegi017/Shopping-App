import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
        <div className='bg-slate-900'>
            <Navbar/>
        </div>

        <Routes>
            <Route path='/product/:id' element={<ProductDetail/>}></Route>
            <Route  path="/" element={<Home/>} />
            <Route  path="/cart" element={<Cart/>} />
        </Routes>

        <Footer/>
    </div>
  )
};

export default App 