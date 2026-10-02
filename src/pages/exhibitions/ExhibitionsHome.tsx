import '../../css/ArtworkHome.css';
import LinkTile from '../../components/LinkTile';

function ExhibitionsHome() {
  return (
    <div className='content'>
      <LinkTile title='Virtual Exhibition' image='/images/stills/abigail_ring.jpg' link='/exhibitions/onlineexhibition' />
      <LinkTile title='Parc View Art Expo' image='/images/exhibitions/pcve-cover.jpg' link='/exhibitions/parcviewexpo' />
      <LinkTile title='SRISA Summer B Art Exhibition' image='/images/exhibitions/srisa_sB_guildedwallcard.jpg' link='/exhibitions/srisasummerb' />
      <LinkTile title='SRISA Summer A Art Exhibition' image='/images/exhibitions/srisa_sA_card.jpg' link='/exhibitions/srisasummera' />
      <LinkTile title='PAPR Spring Salon Show 2025' image='/images/exhibitions/2025paprposter.jpg' link='/exhibitions/paprsalonshow2025' />
      <LinkTile title='AFO CONTENT 2024' image='/images/exhibitions/afo_poster.jpg' link='/exhibitions/afocontent2024' />
      <LinkTile title='Spukhaus 2023' image='/images/exhibitions/spuk_poster.jpg' link='/exhibitions/spukhaus2023' />
    </div>
  );
}

export default ExhibitionsHome;
