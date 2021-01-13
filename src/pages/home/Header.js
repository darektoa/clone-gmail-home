import '../../styles/home/header.css';
import logo from '../../images/logo-gmail.png';

const Header = () => {
    return (
      <header>
        <nav className="container">
          <figure>
            <img src={logo} alt="logo" />
            <figcaption>Gmail</figcaption>
          </figure>
          <ul>
            <li><a href="/">Untuk Bisnis</a></li>
            <li><a href="/">Login</a></li>
            <li><a href="/" className="register">Buat akun</a></li>
          </ul>
        </nav>
      </header>
    );
}; 

export default Header;