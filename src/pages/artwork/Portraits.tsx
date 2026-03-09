import Masonry from "../../components/Masonry"
import { artworks } from "../../data/artworks"

function Portraits() {
  const items = artworks.portraits

  return (
    <Masonry items={items} />
  )
}

export default Portraits