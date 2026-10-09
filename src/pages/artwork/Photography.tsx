import Masonry from "../../components/Masonry"
import { artworks } from "../../data/artworks"

function Photography() {
  const items = artworks.photography

  return (
    <Masonry items={items} />
  )
}

export default Photography
