import TeamCard from "../fragments/TeamCard"

const Team = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 sm:py-32 px-5 xl:px-0">
        <div className="w-[70rem] flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold tracking-tighter">Meet Our Team👩🏻‍💻</h1>
            <div className="flex gap-8 mt-20 flex-wrap">
                <TeamCard 
                  name="Ahmad"
                  path="ML"
                  image="assets/ahmad.png"
                />
                <TeamCard 
                  name="Dayn"
                  path="ML"
                  image="assets/dayn.png"
                />
                <TeamCard 
                  name="Icha"
                  path="ML"
                  image="assets/icha.png"
                />
                <TeamCard 
                  name="Washlur"
                  path="CC"
                  image="assets/washlur.jpg"
                />
                <TeamCard 
                  name="Pram"
                  path="CC"
                  image="assets/face.jpg"
                />
                <TeamCard 
                  name="Hilmy"
                  path="MD"
                  image="assets/hilmy.jpg"
                />
                <TeamCard 
                  name="Sulaiman"
                  path="MD"
                  image="assets/sulaiman.jpg"
                />
            </div>
        </div>
    </div>
  )
}

export default Team