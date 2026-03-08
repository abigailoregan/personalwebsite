import Masonry from "../../components/Masonry"
import { exhibitions } from "../../data/exhibitions"

function AfoContent2024() {
  const items = exhibitions.afo2024

  return (
    <Masonry items={items} />
  )
}

export default AfoContent2024
