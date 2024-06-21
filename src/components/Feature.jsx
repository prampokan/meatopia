import FeatureCard from "../fragments/FeatureCard"

const Feature = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20 px-5 xl:px-5" id="feature">
        <h1 className="text-4xl sm:text-7xl font-bold w-full sm:w-[40rem] text-center tracking-tighter mb-10">What are our features 👀?</h1>
        <div className="w-full xl:w-[70rem] bg-zinc-50 flex justify-center items-center border h-full sm:h-[50rem] rounded-[40px] relative overflow-hidden">
            <img src="assets/fitur1.png" alt="" className="absolute w-56 -left-16 top-20 grayscale opacity-50 rotate-[20deg]"/> 
            <img src="assets/fitur2.png" alt="" className="absolute w-56 -right-16 -rotate-6 grayscale top-10 opacity-50"/> 
            <img src="assets/fitur3.png" alt="" className="absolute w-56 -bottom-72 left-44 rotate-12 grayscale opacity-50"/> 
            <img src="assets/fitur4.png" alt="" className="absolute w-56 -bottom-72 -rotate-45 -right-10 grayscale opacity-50"/> 
            <img src="assets/fitur5.png" alt="" className="absolute w-56 left-72 -top-24 -rotate-6 rounded-xl grayscale opacity-50"/>
            <div className="md:w-[44rem] flex flex-wrap gap-5 p-5 md:p-0">
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                      <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
                      <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                  </svg>
                }
                header="Login & Registration"
                description="Easy access with quick, secure account setup."
              />
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                }
                header="Scan Technology"
                description="Advanced image analysis ensures top-quality meat selection."
              />
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>
                }
                header="Payment System"
                description="Seamless transactions with multiple payment options."
              />
              <FeatureCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                }
                header="Shoping Lists & Cart"
                description="Organize and manage purchases effortlessly"
              />
            </div> 
        </div>
    </div>
  )
}

export default Feature