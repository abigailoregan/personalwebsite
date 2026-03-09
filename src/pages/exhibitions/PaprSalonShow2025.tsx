import Masonry from "../../components/Masonry"
import { exhibitions } from "../../data/exhibitions"

function PaprSalonShow2025() {
  const items = exhibitions.papr2025

  return (
    <Masonry items={items} />
  )
}

export default PaprSalonShow2025
