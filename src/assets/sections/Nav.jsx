import Button from "../components/Button"
import { navLinks } from "../constants/links"

const Nav = () => {
  return (
    <div className="flex justify-between items-center  py-4 px-16 max-sm:px-12 max-sm:py-8">
      <div className="flex gap-16 items-center">
        <h1 className="font-bold text-2xl">MedAgui.</h1>
        <div className="flex gap-8 max-lg:hidden text-lg">
          {navLinks.map(link => (
            <a key={link.name}  href={link.link}>{link.name}</a>
          ))}
        </div>
      </div>
      <div className="max-sm:hidden">
        <Button label={"LET'S TALK"} isInversed={true}/>
      </div>
      <div className="sm:hidden">
        <button>
          <img src="icons/hamburger.svg" alt="menu" className="w-6 h-6 dark:fill-white"/>
        </button>
      </div>
      
    </div>
    
  )
}

export default Nav