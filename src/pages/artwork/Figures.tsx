import Masonry from "../../components/Masonry"
import { artworks } from "../../data/artworks"

function Figures() {
  const items = artworks.figures

  return (
    <Masonry items={items} />
  )
}

export default Figures