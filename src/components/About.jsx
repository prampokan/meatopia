const About = () => {
  return (
    <div className="w-full py-20 flex justify-center items-center">
        <div className="w-[70rem] flex justify-center bg-red-500 h-[35rem] rounded-[40px]">
            <div className="w-1/2">

            </div>
            <div className="w-1/2 flex relative">
                <img src="assets/about1.png" alt="" className="absolute w-56 -rotate-12 top-12 left-10 z-10 shadow-2xl rounded-[39px]"/>
                <img src="assets/about2.png" alt="" className="absolute w-56 rotate-6 top-40 left-60 shadow-2xl rounded-[39px]"/>
            </div>
        </div>
    </div>
  )
}

export default About