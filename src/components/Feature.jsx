const Feature = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20">
        <h1 className="text-7xl font-bold w-[40rem] text-center tracking-tighter mb-10">What are our features 👀?</h1>
        <div className="w-[70rem] bg-zinc-50 flex justify-center border h-[50rem] rounded-[40px] relative overflow-hidden">
            <img src="assets/fitur1.png" alt="" className="absolute w-56 -left-16 top-20 grayscale opacity-75 rotate-[20deg]"/> 
            <img src="assets/fitur2.png" alt="" className="absolute w-56 -right-16 -rotate-6 grayscale opacity-75"/> 
            <img src="assets/fitur3.png" alt="" className="absolute w-56 -bottom-72 left-44 rotate-12 grayscale opacity-75"/> 
            <img src="assets/fitur4.png" alt="" className="absolute w-56 -bottom-72 -rotate-45 -right-10 grayscale opacity-75"/> 
            <img src="assets/fitur5.png" alt="" className="absolute w-56 left-72 -top-24 -rotate-6 rounded-xl grayscale opacity-75"/> 
        </div>
    </div>
  )
}

export default Feature