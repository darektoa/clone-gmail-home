import '../../styles/home/hero.css';
import hero from '../../images/hero.png';

const Hero = () => {
    return (
      <section id="hero">
        <div className="container">
          <div className="text-box">
            <h1>Selesaikan lebih banyak hal dengan Gmail</h1>
            <p>Solusi untuk rapat video dengan fitur teks otomatis dan berbagi layar hingga maksimum 100 orang. Gabung sekarang dengan Google Meet di Gmail.</p>
            <a href="/" className="register">Buat akun</a>
          </div>
  
          <div className="img-box">
            <img src={hero} alt="" />
          </div>
        </div>
      </section>
    );
};

export default Hero;