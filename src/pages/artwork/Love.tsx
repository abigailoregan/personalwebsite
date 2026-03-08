import Masonry from "../../components/Masonry"
import { artworks } from "../../data/artworks"

function Love() {
  const items = artworks.love

  return (
    <Masonry items={items} />
  )
}

export default Love