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
                    <li className="text-lg font-medium hover:text-green-500 transition-all">
                        <a href="#home">Home</a>
                    </li>
                    <li className="text-lg font-medium hover:text-green-500 transition-all">
                        <a href="#about">About</a>
                    </li>
                    <li className="text-lg font-medium hover:text-green-500 transition-all">
                        <a href="#feature">Feature</a>
                    </li>
                    <li className="text-lg font-medium hover:text-green-500 transition-all">
                        <a href="#info">Info</a>
                    </li>
                </ul>
                <div className="relative flex sm:hidden gap-5" ref={divRef}>
                    <Bar onclick={() => setOpen(!open)}/>
                    <div className={`${open ? "opacity-1 translate-y-1" : "invisible"} shadow rounded-xl transition-all absolute w-52 flex flex-col gap-2 top-14 right-0 bg-white p-2 z-10`}>
                        <a href="#home" className="bg-white p-2 font-medium hover:text-green-500">Home</a>
                        <a href="#about" className="bg-white p-2 font-medium hover:text-green-500">About</a>
                        <a href="#feature" className="bg-white p-2 font-medium hover:text-green-500">Info</a>
                        <a href="#info" className="bg-white p-2 font-medium hover:text-green-500">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar