const OtherFeature = () => {
  return (
    <div className="w-full flex justify-center items-center px-5 xl:px-0 pb-32">
        <div className="w-[70rem] h-[32rem] sm:h-[36rem] md:h-[40rem] bg-red-500 rounded-[40px] border flex flex-col items-center overflow-hidden">
            <div className="mt-10 flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl tracking-tighter font-bold text-white text-center">Profile · Payment · Order History</h1>
                <p className="text-center w-full md:w-[43rem] px-5 md:px-0 text-xl text-white leading-relaxed mt-5">Easily manage your account details and preferences through Profile, securely handle payment methods, and conveniently track orders via Order History.</p>
            </div>
            <div className="flex translate-y-7 sm:translate-y-14 justify-center">
                <img src="assets/other1.png" alt="" className="w-32 sm:w-44 md:w-56 -rotate-6 translate-y-7 translate-x-10 sm:translate-x-0"/>
                <img src="assets/other2.png" alt="" className="w-32 sm:w-44 md:w-56 z-10"/>
                <img src="assets/other3.png" alt="" className="w-32 sm:w-44 md:w-56 rotate-6 translate-y-7 z-20 -translate-x-10 sm:translate-x-0"/>
            </div>
        </div>
    </div>
  )
}

export default OtherFeature