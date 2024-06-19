// import { useState } from "react"

const Navbar = () => {
//   const [open, isOpen] = useState(false)

  return (
    <div className="w-full flex justify-center items-center h-16 shadow fixed bg-white z-[99] px-5 xl:px-0">
        <div className="w-[70rem] flex justify-between items-center">
            <div className="flex items-center">
                <img  className="w-14 h-14" src="assets/logo.png" alt="" />
                <a href="" className="text-xl font-semibold">Meatopia</a>
            </div>
            <div>
                <ul className="flex gap-5">
                    <li className="text-lg font-medium">
                        <a href="">Home</a>
                    </li>
                    <li className="text-lg font-medium">
                        <a href="">About</a>
                    </li>
                    <li className="text-lg font-medium">
                        <a href="">Info</a>
                    </li>
                    <li className="text-lg font-medium">
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar