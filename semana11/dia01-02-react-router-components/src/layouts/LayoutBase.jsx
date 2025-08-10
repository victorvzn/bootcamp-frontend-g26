import { Outlet } from "react-router"

const LayoutBase = () => {
  return (
    <>
      <div>LayoutBase (ESTATICO)</div>

      <Outlet />
    </>
  )
}

export default LayoutBase