import Button from "../components/Button"
import { navLinks } from "../constants/links"

const Nav = () => {
  return (
    <div className="flex justify-between items-center  py-4 px-4">
      <div className="flex gap-16 items-center">
        <h1 className="font-bold text-2xl">MedAgui.</h1>
        <div className="flex gap-8">
          {navLinks.map(link => (
            <a href={link.link}>{link.name}</a>
          ))}
        </div>
      </div>
      <div>
        <Button label={"LET'S TALK"} isInversed={true}/>
      </div>
      
    </div>
    
  )
}

export default Nav