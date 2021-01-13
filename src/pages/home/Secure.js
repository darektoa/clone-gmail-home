import '../../styles/home/secure.css';
import secure from '../../images/secure.png';

const Secure = () => {
  return (
    <section id="secure">
      <div className="container">
        <div className="img-box">
          <img src={secure} alt="" />
        </div>

        <div className="text-box">
          <h1>Hindari email mencurigakan</h1>
          <p>Gmail memblokir 99,9% email berbahaya sebelum sampai ke kotak masuk Anda. Jika ada yang mencurigakan, Anda akan melihat peringatan.</p>
        </div>
      </div>
    </section>
  );
};

export default Secure;