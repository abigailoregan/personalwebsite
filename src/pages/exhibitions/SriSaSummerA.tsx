import Masonry from "../../components/Masonry"
import { exhibitions } from "../../data/exhibitions"

function SriSaSummerA() {
  const items = exhibitions.srisaA

  return (
    <Masonry items={items} />
  )
}

export default SriSaSummerA