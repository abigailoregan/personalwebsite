import Masonry from "../../components/Masonry"
import { exhibitions } from "../../data/exhibitions"

function SriSaSummerB() {
  const items = exhibitions.srisaB

  return (
    <Masonry items={items} />
  )
}

export default SriSaSummerB
