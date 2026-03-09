import Masonry from "../../components/Masonry"
import { exhibitions } from "../../data/exhibitions"

function Spukhaus2023() {
  const items = exhibitions.spukhaus2023

  return (
    <Masonry items={items} />
  )
}

export default Spukhaus2023
