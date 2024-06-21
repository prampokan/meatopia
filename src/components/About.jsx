const About = () => {
  return (
    <div className="w-full py-20 flex justify-center items-center px-5 xl:px-0" id="about">
        <div className="w-[70rem] flex flex-col md:flex-row justify-center bg-red-500 md:h-[35rem] rounded-[40px]">
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">Help you find the finest quality of meat!</h1>
                <p className="text-2xl text-white mt-10">
                  Meatopia offers a extensive range of premium-quality meats, ensuring you get the best selection. Our advanced machine learning scan feature helps you choose the perfect meat for your lifestyle, promising an exceptional culinary experience.
                </p>
            </div>
            <div className="md:w-1/2 flex relative justify-center">
                <img src="assets/about1.png" alt="" className="md:absolute w-40 lg:w-56 -rotate-12 top-12 left-10 z-10 shadow-2xl lg:rounded-[39px]"/>
                <img src="assets/about2.png" alt="" className="md:absolute w-40 lg:w-56 rotate-6 top-40 left-44 lg:left-60 shadow-2xl lg:rounded-[39px]"/>
            </div>
        </div>
    </div>
  )
}

export default About