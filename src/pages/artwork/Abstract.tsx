import Masonry from "../../components/Masonry"
import { artworks } from "../../data/artworks"

function Abstract() {
  const items = artworks.abstract

  return (
    <Masonry items={items} />
  )
}

export default Abstract