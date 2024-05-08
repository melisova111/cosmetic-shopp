import './Header.css';

import React from 'react';

import {
  Link
} from 'react-router-dom';
function Header() {
  return (
    <>

      <div className="all_menu">
        <div >
            <nav className='menu flex' >
              <ul className='menu flex'>
                <li>
                  <Link to="./Home">Home</Link>
                </li>
                <li>
                  <Link to="./About">Shop all</Link>
                </li>
                <li>
                  <Link to="./Delivery">Delivery</Link>
                </li>
                <li>
                  <Link to="./Contact">Contact</Link>
                </li>
                <li>
                  <Link to="./Cart">Cart</Link>
                </li>
              </ul>
            </nav>


        </div>
      </div>

    </>
  );
}

export default Header;
