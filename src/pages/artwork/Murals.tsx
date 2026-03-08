import Masonry from "../../components/Masonry"
import { artworks } from "../../data/artworks"

function Murals() {
  const items = artworks.murals

  return (
    <Masonry items={items} />
  )
}

export default Murals