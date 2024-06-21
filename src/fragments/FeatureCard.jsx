const FeatureCard = (props) => {
  const {header, description, icon} = props
  return (
    <div className="w-full md:w-[21rem] p-4 rounded-lg bg-white shadow z-10">
        <div className="flex gap-4 items-center font-semibold text-xl">
            <div className="p-2 border rounded-lg">
                {icon}
            </div>
            {header}
        </div>
        <p className="mt-1">
            {description}
        </p>
    </div>
  )
}

export default FeatureCard