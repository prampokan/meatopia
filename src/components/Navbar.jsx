import { useState, useRef, useEffect } from "react"
import Bar from "../elements/Bar"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-16 shadow fixed bg-white z-[99] px-5 xl:px-0">
        <div className="w-[70rem] flex justify-between items-center">
            <div className="flex items-center">
                <img  className="w-14 h-14" src="assets/logo.png" alt="" />
                <a href="" className="text-xl font-semibold">Meatopia</a>
            </div>
            <div>
                <ul className="hidden sm:flex gap-5">
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
                <div className="relative flex sm:hidden gap-5" ref={divRef}>
                    <Bar onclick={() => setOpen(!open)}/>
                    <div className={`${open ? "opacity-1 translate-y-1" : "invisible"} shadow rounded-xl transition-all absolute w-52 flex flex-col gap-2 top-14 right-0 bg-white p-2 z-10`}>
                        <a href="" className="bg-white p-2 font-medium">Home</a>
                        <a href="" className="bg-white p-2 font-medium">About</a>
                        <a href="" className="bg-white p-2 font-medium">Info</a>
                        <a href="" className="bg-white p-2 font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar