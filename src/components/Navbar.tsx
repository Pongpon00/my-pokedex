import Pokeball from "../assets/pokeball.png";
import Pokemon_logo from "../assets/International_Pokémon_logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  let prevScrollpos: number = window.scrollY;

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      setHideNavbar(false);
    } else {
      setHideNavbar(true);
    }
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{
          y: hideNavbar ? "-100%" : "0",
          transition: { duration: 0.1 },
        }}
        className={`fixed top-0 left-0 flex flex-row bg-rose-500 w-full items-center h-14 px-6 text-white shadow-sm z-50 transition-transform duration-300`}
      >
        <div className="flex w-full h-full items-center justify-start">
          <img className="size-7" src={Pokeball} alt="Pokeball" />
          <img className="px-2 h-7" src={Pokemon_logo} alt="Pokemon Logo" />
        </div>
        <div className="flex w-full h-full items-center justify-end">
          <Link className="px-8" to={"/"}>
            Pokedex
          </Link>
          <Link to={"/favourite"} className="">
            My Favourite
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
