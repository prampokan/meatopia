const Scan = () => {
  return (
    <div className="w-full bg-zinc-800 py-10 sm:py-0 sm:h-[23rem] my-36 flex justify-center items-center px-5 xl:px-0">
        <div className="w-[70rem] h-full flex flex-col sm:flex-row justify-center items-center">
            <div className="sm:w-1/2">
                <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">Just Scan it, then have a good meat!</h1>
                <p className="text-2xl text-white mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, asperiores?</p>
            </div>
            <div className="sm:w-1/2">
                <img src="assets/scan.png" alt="" className="mt-10 sm:mt-0 w-44 md:w-60 sm:translate-x-20 lg:translate-x-44"/>
            </div>
        </div>
    </div>
  )
}

export default Scan