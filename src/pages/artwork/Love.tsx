import Masonry from "../../components/Masonry"
import { artworks } from "../../data/artworks"
import '../../css/ArtistStatement.css'

function Love() {
  const items = artworks.love

  return (
    <>
      <Masonry items={items} />
      <p className='artiststatement'>This series explores love, loss, and the desperate measures one might take to bridge the gap between life and death. It follows a man, tormented by grief, who attempts to summon his dead lover back from the grave. Themes of mortality, persistence of memory, and the consequences of defying the natural order are woven throughout this narrative. Each piece invites the viewer to reflect on the powerful emotions that drive us to hold onto the past, even when faced with the impossibility of reclaiming what is gone.</p>
    </>
  )
}

export default Love