import { motion } from "framer-motion";

interface CardProps {
  image: string;
  pokemon_name: string;
  pokemon_id: number;
  pokemon_types?: string[];
}

const fillzero = (num: number) => {
  return num.toString().padStart(4, "0");
};

const elementColor: { [key: string]: { bg: string; text: string } } = {
  normal: { bg: "#A8A77A", text: "#000000" },
  fire: { bg: "#EE8130", text: "#FFFFFF" },
  water: { bg: "#6390F0", text: "#FFFFFF" },
  electric: { bg: "#F7D02C", text: "#000000" },
  grass: { bg: "#7AC74C", text: "#000000" },
  ice: { bg: "#96D9D6", text: "#000000" },
  fighting: { bg: "#C22E28", text: "#FFFFFF" },
  poison: { bg: "#A33EA1", text: "#FFFFFF" },
  ground: { bg: "#E2BF65", text: "#000000" },
  flying: { bg: "#A98FF3", text: "#000000" },
  psychic: { bg: "#F95587", text: "#FFFFFF" },
  bug: { bg: "#A6B91A", text: "#000000" },
  rock: { bg: "#B6A136", text: "#000000" },
  ghost: { bg: "#735797", text: "#FFFFFF" },
  dragon: { bg: "#6F35FC", text: "#FFFFFF" },
  dark: { bg: "#705746", text: "#FFFFFF" },
  steel: { bg: "#B7B7CE", text: "#000000" },
  fairy: { bg: "#D685AD", text: "#000000" },
};

function Card({ image, pokemon_name, pokemon_id, pokemon_types }: CardProps) {
  return (
    <motion.div
      className="w-60 h-80 bg-white rounded-xl block shadow-lg overflow-hidden border"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.85 }}
    >
      <div className="h-[70%] flex items-center justify-center">
        <img src={image} className="object-contain size-full " />
      </div>
      <div className=" w-full h-[30%] bg-slate-100">
        <div className="flex flex-col w-full h-full justify-center px-3">
          <p className=" font-semibold text-gray-500">
            #{fillzero(pokemon_id)}
          </p>
          <p className=" font-semibold w-full text-xl truncate ">
            {pokemon_name}
          </p>
          <div className=" w-full gap-x-1 flex pt-1">
            {pokemon_types?.map((type, index) => (
              <span
                key={index}
                className="px-2 rounded-md text-sm"
                style={{ backgroundColor: elementColor[type].bg, color: elementColor[type].text }}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
