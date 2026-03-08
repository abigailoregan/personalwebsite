import Masonry from "../../components/Masonry"
import { artworks } from "../../data/artworks"

function Stills() {
  const items = artworks.stills

  return (
    <Masonry items={items} />
  )
}

export default Stills