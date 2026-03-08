import { Outlet } from "react-router-dom"

function ArtworkLayout() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontWeight: "600"
      }}
    >
      <Outlet />
    </div>
  )
}

export default ArtworkLayout
