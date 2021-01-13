import '../../styles/home/footer.css';
import help from '../../images/help.svg';
import google from '../../images/google.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-box">
          <img src={google} alt="" />
          <ul>
            <li><a href="/">Privasi</a></li>
            <li><a href="/">Persyaratan</a></li>
            <li><a href="/">Tentang Google</a></li>
            <li><a href="/">Produk Google</a></li>
            <li><a href="/">Kebijakan Kami</a></li>
          </ul>
        </div>

        <div className="bottom-box">
          <a href="/" className="help">
            <img src={help} alt="" />
            Bantuan
          </a>
          <select>
            <option>Indonesia</option>
            <option>English</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;