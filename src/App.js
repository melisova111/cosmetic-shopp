import './App.css';
import './Components/Menu/Menu'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Cart from '../../Pages/Cart/Cart';
import Delivery from '../../Pages/Delivery/Delivery';
import NotFound from '../../Pages/NotFound/NotFound';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Order from '../../Pages/Order/Order';
function App() {
  return (
    <>
      <Header>
      </Header>
      <Router>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App; 
