import '../../styles/home/experience.css';
import playstore from '../../images/get-on-playstore.png';
import appstore from '../../images/get-on-appstore.png';
import crossDevice from '../../images/cross-device.png';

const Experience = () => {
    return(
      <section id="experience">
        <div className="container">
          <div className="text-box">
					<h1>Cobalah Gmail di perangkat apa saja</h1>
					<p>Kemudahan & kesederhanaan Gmail, di mana pun Anda berada.</p>
				</div>

				<div className="download-box">
					<a href="/" className="for-android">
						<img src={playstore} alt="" />
					</a>
					<a href="/" className="for-ios">
						<img src={appstore} alt="" />
					</a>
				</div>

				<div className="img-box">
					<img src={crossDevice} alt="" />
				</div>
        </div>
      </section>
    );
};

export default Experience;