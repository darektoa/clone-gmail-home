import logo from './images/logo-gmail.png';
import hero from './images/hero.png';
import './App.css';

const App = () => {
  return (
    <main>
      <Hero />
    </main>
  );
}

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
          <li><a href="/" className="register">Buat Akun</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="container">
      <div className="text-box">
        <h1>Selesaikan lebih banyak hal dengan Gmail</h1>
        <p>Solusi untuk rapat video dengan fitur teks otomatis dan berbagi layar hingga maksimum 100 orang. Gabung sekarang dengan Google Meet di Gmail.</p>
        <a href="/" className="register">Buat Akun</a>
      </div>

      <div className="img-box">
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export {
  App,
  Header,
};
