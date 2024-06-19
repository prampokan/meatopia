import FeatureCard from "../fragments/FeatureCard"

const Feature = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20 px-5 xl:px-5">
        <h1 className="text-4xl sm:text-7xl font-bold w-full sm:w-[40rem] text-center tracking-tighter mb-10">What are our features 👀?</h1>
        <div className="w-full xl:w-[70rem] bg-zinc-50 flex justify-center items-center border h-full sm:h-[50rem] rounded-[40px] relative overflow-hidden">
            <img src="assets/fitur1.png" alt="" className="absolute w-56 -left-16 top-20 grayscale opacity-50 rotate-[20deg]"/> 
            <img src="assets/fitur2.png" alt="" className="absolute w-56 -right-16 -rotate-6 grayscale top-10 opacity-50"/> 
            <img src="assets/fitur3.png" alt="" className="absolute w-56 -bottom-72 left-44 rotate-12 grayscale opacity-50"/> 
            <img src="assets/fitur4.png" alt="" className="absolute w-56 -bottom-72 -rotate-45 -right-10 grayscale opacity-50"/> 
            <img src="assets/fitur5.png" alt="" className="absolute w-56 left-72 -top-24 -rotate-6 rounded-xl grayscale opacity-50"/>
            <div className="md:w-[44rem] flex flex-wrap gap-5 p-5 md:p-0">
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
            </div> 
        </div>
    </div>
  )
}

export default Feature