import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className='header' role='banner'>
      <div className='container header-content'>
        <div className='logo'>
          <a href='index.html' className='nav-brand'>
            <img src='./images/logo.png' alt='Logo' role='button' />
          </a>
        </div>

        <nav className='navbar'>
          <button className='nav-toggle' type='button'>
            <span
              className='nav-toggle-icon'
              aria-label='Open Navigation'></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
