import { Link } from 'react-router-dom';
import '../../css/ArtworkHome.css';

function ArtworkHome() {
  return (
    <div className='content'>
      <div className='cover-photo'>
        <img src='/images/abstract/cover.png' alt='Abstract' />
        <Link to='/artwork/abstract'>
          <div className='backdrop'>
            <div className='text-desc'>Abstract</div>
          </div>
        </Link>
      </div>
      <div className='cover-photo'>
        <img src='/images/figures/cover.jpg' alt='Figures' />
        <Link to='/artwork/figures'>
          <div className='backdrop'>
            <div className='text-desc'>Figures</div>
          </div>
        </Link>
      </div>
      <div className='cover-photo'>
        <img src='/images/landscapes/cover.png' alt='Landscapes' />
        <Link to='/artwork/landscapes'>
          <div className='backdrop'>
            <div className='text-desc'>Landscapes</div>
          </div>
        </Link>
      </div>
      <div className='cover-photo'>
        <img src='/images/love/cover.png' alt='Love' />
        <Link to='/artwork/love'>
          <div className='backdrop'>
            <div className='text-desc'>Love</div>
          </div>
        </Link>
      </div>
      <div className='cover-photo'>
        <img src='/images/murals/cover.png' alt='Murals' />
        <Link to='/artwork/murals'>
          <div className='backdrop'>
            <div className='text-desc'>Murals</div>
          </div>
        </Link>
      </div>
      <div className='cover-photo'>
        <img src='/images/portraits/cover.png' alt='Portraits' />
        <Link to='/artwork/portraits'>
          <div className='backdrop'>
            <div className='text-desc'>Portraits</div>
          </div>
        </Link>
      </div>
      <div className='cover-photo'>
        <img src='/images/stills/cover.png' alt='Still Lifes' />
        <Link to='/artwork/stills'>
          <div className='backdrop'>
            <div className='text-desc'>Still Lifes</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ArtworkHome;
