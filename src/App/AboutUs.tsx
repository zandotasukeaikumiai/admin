import './AboutUs.scss'
import config from '../config.json'
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url
    }
  }


  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image"><img src={`${process.env.PUBLIC_URL}/icon-pwamap.svg`} alt=""/></div>
          <div className="logo">Geolonia PWAマップ</div>
        </div>

        <p>Geolonia PWAマップは、Google スプレッドシートを更新するだけでオリジナルの地図アプリを作成することができます。</p>



      </div>
    </div>
  );
};

export default Content;
