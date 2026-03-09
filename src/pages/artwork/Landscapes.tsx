import Masonry from "../../components/Masonry"
import { artworks } from "../../data/artworks"

function Landscapes() {
  const items = artworks.landscapes

  return (
    <Masonry items={items} />
  )
}

export default Landscapes