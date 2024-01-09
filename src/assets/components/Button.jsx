const Button = ({label, isGradient, isInversed}) => {
  return (
    <button className={`font-satoshi uppercase
     ${isInversed 
      ? " hover:bg-white_primary dark:hover:bg-black_primary hover:text-black_primary dark:hover:text-white_primary border-[1px]  hover:border-[1px] hover:border-black_primary dark:hover:border-white_primary transition-[color, background-color] duration-500 bg-black_primary text-white_primary dark:text-black_primary dark:bg-white_primary" 
      : "dark:border-white border-[1px] border-black_primary hover:scale-[1.1] transition-transform duration-300"} 
     ${isGradient && "gradient border-none text-white_primary"} px-6 py-2 rounded-full`} >
        <p className="font-semibold">{label}</p>
        {/* #B16CEA - #FF5E69 - #FF8A56 - #FFA84B */}
    </button>
  )
}

export default Button