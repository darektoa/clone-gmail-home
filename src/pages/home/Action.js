import '../../styles/home/action.css';
import action from '../../images/action.png'

const Action = () => {
  return (
    <section id="action">
      <div className="container">
        <div class="text-box">
          <h1>Ambil tindakan langsung dari kotak masuk</h1>
          <p>Lihat lampiran, RSVP acara, tunda pesan, dan berbagai hal lainnya tanpa membuka email.</p>
        </div>
        <div className="img-box">
          <img src={action} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Action;