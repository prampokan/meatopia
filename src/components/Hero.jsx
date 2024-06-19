const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center pt-44 pb-10 px-5 xl:px-0">
        <div className="w-[70rem] flex flex-col justify-center items-center relative">
            {/* <div className="absolute left-0 top-0">
                <img src="assets/kampusmerdeka.png" alt="" className="w-24 mb-8 opacity-50"/>
                <img src="assets/bangkit.png" alt="" className="w-24 opacity-50"/>
            </div> */}
            <div className="text-8xl md:text-[10rem] tracking-tighter relative flex flex-col justify-center text-center font-bold w-full sm:w-[32rem] md:w-[50rem] leading-none">
                <span className="">Fresh</span>
                <span className="z-10">Market</span>
                <span className="absolute left-[15rem] sm:left-[21rem] md:left-[33rem]">
                    <img src="assets/hero.png" alt="" className="rotate-12 w-28 md:w-52"/>
                </span>
            </div>
            <div className="text-xl font-semibold cursor-pointer shadow p-3 pr-5 rounded-xl flex items-center mb-14 gap-2 mt-8 z-[10] bg-white/50 backdrop-blur">
                <img src="assets/app.png" alt="" className="w-10"/>
                <span>Meatopia App</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
            <div className="text-center w-full md:w-[44rem] text-xl leading-loose">
                <p>Meatopia is a meat sales application, which is equipped with technological innovations to make it easier for users to assess the quality of meat through image classification using machine learning.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero