import TeamCard from "../fragments/TeamCard"

const Team = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 sm:py-32 px-5 xl:px-0">
        <div className="w-[70rem] flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold tracking-tighter">Meet Our Team👩🏻‍💻</h1>
            <div className="flex gap-8 mt-20 flex-wrap">
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
        </div>
    </div>
  )
}

export default Team