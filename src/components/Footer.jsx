const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center py-32 bg-zinc-900">
        <div className="w-[70rem] flex">
          <div>
            <div className="flex items-center gap-2">
              <img src="assets/app.png" alt="" className="w-10" />
              <h1 className="text-4xl font-bold tracking-tighter text-white">Meatopia</h1>
            </div>
            <p className="text-lg font-bold text-zinc-500 mt-6">Capstone Team bla bla...</p>
            <p className="text-lg font-bold text-zinc-500">© Copyright 2024. All Rights Reserved.</p>
          </div>
        </div>
    </div>
  )
}

export default Footer