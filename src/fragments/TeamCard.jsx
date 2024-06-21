const TeamCard = (props) => {

  const {name, image, path} = props
  return (
    <div className="flex flex-col items-center gap-2">
        <div className="h-32 w-32 rounded-full relative bg-zinc-100">
            <img src={image} alt="" className="rounded-full"/>
            <span className="p-2 bg-black text-white rounded-full font-bold absolute bottom-0 right-0">{path}</span>
        </div>
        <h1 className="font-medium text-2xl">{name}</h1>
    </div>
  )
}

export default TeamCard