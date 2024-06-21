const Scan = () => {
  return (
    <div className="w-full bg-zinc-800 py-10 sm:py-0 sm:h-[23rem] my-36 flex justify-center items-center px-5 xl:px-0">
        <div className="w-[70rem] h-full flex flex-col sm:flex-row justify-center items-center">
            <div className="sm:w-1/2">
                <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">Just Scan it, then have a good meat!</h1>
                <p className="text-2xl text-white mt-10">Machine Learning scan analyzes every detail, from marbling and texture to color and freshness.</p>
            </div>
            <div className="sm:w-1/2 flex relative">
                <img src="assets/scan1.png" alt="" className="mt-10 sm:mt-0 w-28 md:w-40 lg:w-52 -translate-x-16 sm:translate-x-10 lg:translate-x-20 z-10"/>
                <img src="assets/scan2.png" alt="" className="w-24 md:w-36 lg:w-48 absolute left-14 sm:left-48 md:left-52 lg:left-72 top-5" />
            </div>
        </div>
    </div>
  )
}

export default Scan