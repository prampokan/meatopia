const TeamCard = () => {
  return (
    <div className="flex flex-col items-center gap-2">
        <div className="h-32 w-32 rounded-full relative">
            <img src="assets/face.jpg" alt="" className="rounded-full"/>
            <span className="p-2 bg-black text-white rounded-full font-bold absolute bottom-0 right-0">CC</span>
        </div>
        <h1 className="font-medium text-2xl">pram</h1>
    </div>
  )
}

export default TeamCard