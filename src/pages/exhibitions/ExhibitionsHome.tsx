import { Link } from 'react-router-dom';
import '../../css/ArtworkHome.css';

function ExhibitionsHome() {
  return (
    <div className='content'>
      <div className='cover-photo'>
        <img src='/images/exhibitions/pcve-cover.jpg' alt='Parc View Art Expo' />
        <Link to='/exhibitions/parcviewexpo'>
          <div className='backdrop'>
            <div className='text-desc'>Parc View Art Expo</div>
          </div>
        </Link>
      </div>
      <div className='cover-photo'>
        <img src='/images/exhibitions/srisa_sB_guildedwallcard.jpg' alt='SRISA Summer B Art Exhibition' />
        <Link to='/exhibitions/srisasummerb'>
          <div className='backdrop'>
            <div className='text-desc'>SRISA SUMMER B Art Exhibition</div>
          </div>
        </Link>
      </div>
      <div className='cover-photo'>
        <img src='/images/exhibitions/srisa_sA_card.jpg' alt='SRISA Summer A Art Exhibition' />
        <Link to='/exhibitions/srisasummera'>
          <div className='backdrop'>
            <div className='text-desc'>SRISA SUMMER A Art Exhibition</div>
          </div>
        </Link>
      </div>
      <div className='cover-photo'>
        <img src='/images/exhibitions/2025paprposter.jpg' alt='PAPR Spring Salon Show 2025' />
        <Link to='/exhibitions/paprsalonshow2025'>
          <div className='backdrop'>
            <div className='text-desc'>PAPR Spring Salon Show 2025</div>
          </div>
        </Link>
      </div>
      <div className='cover-photo'>
        <img src='/images/exhibitions/afo_poster.jpg' alt='AFO CONTENT 2024' />
        <Link to='/exhibitions/afocontent2024'>
          <div className='backdrop'>
            <div className='text-desc'>AFO CONTENT 2024</div>
          </div>
        </Link>
      </div>
      <div className='cover-photo'>
        <img src='/images/exhibitions/spuk_poster.jpg' alt='Spukhaus 2023' />
        <Link to='/exhibitions/spukhaus2023'>
          <div className='backdrop'>
            <div className='text-desc'>Spukhaus 2023</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ExhibitionsHome;
