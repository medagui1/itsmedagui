const Button = ({label, isGradient, isInversed}) => {
  return (
    <button className={`font-satoshi uppercase ${isInversed ? "bg-black_primary text-white_primary dark:text-black_primary dark:bg-white_primary" : "dark:border-white border-[1px] border-black_primary "} ${isGradient && "gradient border-none text-white_primary"} px-6 py-2 rounded-full`} >
        <p className="font-semibold">{label}</p>
        {/* #B16CEA - #FF5E69 - #FF8A56 - #FFA84B */}
    </button>
  )
}

export default Button