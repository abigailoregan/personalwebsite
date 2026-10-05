import '../../css/ArtworkHome.css';
import LinkTile from '../../components/LinkTile';

function ArtworkHome() {
  return (
    <div className='content'>
        <LinkTile title='Abstract' image='/images/abstract/cover.png' link='/artwork/abstract' />
        <LinkTile title='Figures' image='/images/figures/cover.jpg' link='/artwork/figures' />
        <LinkTile title='Landscapes' image='/images/landscapes/cover.png' link='/artwork/landscapes' />
        <LinkTile title='Murals' image='/images/murals/cover.png' link='/artwork/murals' />
        <LinkTile title='Portraits' image='/images/portraits/cover.png' link='/artwork/portraits' />
        <LinkTile title='Still Lifes' image='/images/stills/cover.png' link='/artwork/stills' />
    </div>
  );
}

export default ArtworkHome;
