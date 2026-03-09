import Masonry from "../../components/Masonry"
import { exhibitions } from "../../data/exhibitions"

function ParcViewExpo() {
  const items = exhibitions.parcviewexpo

  return (
    <Masonry items={items} />
  )
}

export default ParcViewExpo
