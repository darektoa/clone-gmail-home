import '../../styles/home/started.css';
import logo from '../../images/logo-gmail.png';

const Started = () => {
  return (
    <section id="started">
      <div className="container">
        <img src={logo} alt="" />
        <h1>Mulai gunakan Gmail</h1>
        <a href="/" className="register">Buat akun</a>
      </div>
    </section>
  );
};

export default Started;