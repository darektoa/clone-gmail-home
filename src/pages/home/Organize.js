import '../../styles/home/organize.css';
import organize1 from '../../images/organize-1.png';
import organize2 from '../../images/organize-2.png';

const Organize = () => {
  return (
    <section id="organize">
      <div className="container">
        <div className="card">
          <div className="text-box">
            <h1>Cek dan tanggapi dalam sekejap</h1>
            <p>Lihat email baru dengan cepat, pilih yang ingin Anda baca dan balas.</p>
          </div>
          <div className="img-box">
            <img src={organize1} alt="" />
          </div>
        </div>
        
        <div className="card">
          <div className="text-box">
            <h1>Jangan lewatkan apa pun</h1>
            <p>Fitur tunda mengingatkan Anda untuk menindaklanjuti dan membalas pesan, sehingga tidak akan ada yang terlewatkan.</p>
          </div>
          <div className="img-box">
            <img src={organize2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organize;