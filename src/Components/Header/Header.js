import './Header.css';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';
import Home from '../../Pages/Home/Home';
import Cart from '../../Pages/Cart/Cart';
import Delivery from '../../Pages/Delivery/Delivery';
import NotFound from '../../Pages/NotFound/NotFound';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Order from '../../Pages/Order/Order';

function Header() {
  return (
    <>
      <header className='App-menu'>
        <div className="container">
          <div >
            <Router>
              <nav className='menu' >
                <ul className='menu flex'>
                  <li>
                    <Link to="./Home">Home</Link>
                  </li>
                  <li>
                    <Link to="./About">About</Link>
                  </li>
                  <li>
                    <Link to="./Delivery">Delivery</Link>
                  </li>
                  <li>
                    <Link to="./Order">Order</Link>
                  </li>
                  <li>
                    <Link to="./Contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="./Cart">Cart</Link>
                  </li>
                </ul>
              </nav>
              <a href="book.html" class="btn">Book A Table</a>

              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="catalog" element={<Delivery />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="order" element={<Order />} />
              </Routes>

            </Router>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
