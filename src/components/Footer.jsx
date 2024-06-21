const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center pt-20 pb-10 bg-zinc-900 px-5 xl:px-0" id="info">
        <div className="w-[70rem] flex">
          <div>
            <div className="flex items-center gap-2">
              <img src="assets/app.png" alt="" className="w-10" />
              <h1 className="text-4xl font-bold tracking-tighter text-white">Meatopia</h1>
            </div>
            <p className="text-lg font-bold text-zinc-500 mt-6">Capstone Team C241-PS192</p>
            <p className="text-lg font-bold text-zinc-500">© Copyright 2024. All Rights Reserved.</p>
            <div className="flex gap-5 mt-14">
              <a href="https://github.com/Meatopia-Capstone-Team-C241-PS192" target="_blank" className="text-lg font-bold text-zinc-500 cursor-pointer hover:text-white transition-all">Github</a>
              <a href="https://www.youtube.com/watch?v=7PRE86I0QNQ" target="_blank" className="text-lg font-bold text-zinc-500 cursor-pointer hover:text-white transition-all">Youtube</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer