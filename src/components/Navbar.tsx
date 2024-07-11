import Pokeball from "../assets/pokeball.png";
import Pokemon_logo from "../assets/International_Pokémon_logo.png";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <>
          <div className=" fixed top-0 left-0 flex flex-row bg-rose-500 w-full items-center h-14 px-6 text-white shadow-sm z-50">
            <div className="flex w-full h-full items-center justify-start">
                <img className="size-7" src={Pokeball} alt="" />
                <img className="px-2 h-7" src={Pokemon_logo} alt="" />
            </div>
            <div className="flex w-full h-full items-center justify-end">
                <Link className="px-8" to={"/"}>Pokedex</Link>
                <Link to={"/favourite"} className="">My Favourite</Link>
            </div>
          </div>
        </>
      );
}

export default Navbar;
