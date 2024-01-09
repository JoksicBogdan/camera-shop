import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar'; 
import FootBar from './component/FootBar/FootBar';
import Home from './contents/Home'; 
import NotFound from './contents/NotFound'; 
import ProductDetail from './contents/ProductDetail';
import Cart from './contents/Cart';
import Login from './contents/Login';
import Checkout from './contents/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <div className="content-container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/:productType/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />                
            </Routes>
          </div>
        <FootBar />
      </div>
    </Router>
  );
}

export default App;
