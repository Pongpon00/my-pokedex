import Card from "../components/Card";
import pokeball from "../assets/pokeball.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoadingCard from "../components/LoadingCard";
// import PokePopup from "../components/PokePopup";

type PokemonType = {
  type: {
    name: string;
  };
};

type Pokemon = {
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  name: string;
  id: number;
  types: PokemonType[];
};

function Pokedex() {
  const [pokedex, setPokedex] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(""); 

  const fetchAmount = 10;
  const [count, setCount] = useState(fetchAmount);

  const counterHandler = () => {
    setCount((prevCount) => prevCount + fetchAmount);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const getPokedex = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${count ?? fetchAmount}`,
          {
            signal: abortController.signal,
          }
        );

        const pokemonArray = await Promise.all(
          response.data.results.map(async (pokemon: { url: string }) => {
            const res = await axios.get(pokemon.url, {
              signal: abortController.signal,
            });
            return res.data;
          })
        );
        setPokedex(pokemonArray);
        // setError("");
      } catch (error: any) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          // setError("Something went wrong!");
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    };

    getPokedex();

    return () => {
      abortController.abort();
    };
  }, [count]);

  return (
    <div className="flex flex-wrap flex-col w-full h-full items-center pt-12">
      <p className="text-5xl pt-12 font-bold">Pokedex</p>
      <motion.div className="flex flex-wrap gap-8 justify-center p-12">
        {pokedex &&
          pokedex.map((pokemon) => (
            <div>
              <Card
                key={pokemon.id}
                image={pokemon.sprites.other.home.front_default || pokeball}
                pokemon_name={pokemon.name}
                pokemon_id={pokemon.id ?? 0}
                pokemon_types={pokemon.types?.map(
                  (type: PokemonType) => type.type.name
                )}
              />
            </div>
          ))}
        {loading && (
          <>
            {Array.from({ length: fetchAmount }).map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </>
        )}
      </motion.div>
      <div className="">
        <button
          className="bg-sky-500 p-4 rounded-2xl text-white mb-14"
          onClick={counterHandler}
          disabled={loading} // Optional: Disable button while loading
        >
          Load More...
        </button>
      </div>
    </div>
  );
}

export default Pokedex;
