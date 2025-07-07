import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function PokemonDetails() {
  const { state } = useLocation();
  const name = state?.name;
  const image = state?.img;

  const [details, setDetails] = useState({});

  useEffect(() => {
    async function fetchPokemonDetails() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setDetails(response.data);
    }
    fetchPokemonDetails();
  }, [name]);

  return (
    <div className="flex flex-col items-center bg-[#B3A28D] w-full h-[100vh] overflow-auto p-10">
      <Link to="/" className="color-[#38332C] font-bold text-4xl mb-5 ">
        PokeDex
      </Link>
      <p className="text-[#38332C] font-bold text-2xl mb-2">
        Name: {details.name}
      </p>
      <img
        src={image}
        alt={name}
        className="p-10"
      />
      <p className="text-[#38332C] font-bold text-2xl mb-2">
        Height: {details.height}
      </p>
      <p className="text-[#38332C] font-bold text-2xl mb-2">
        Weight: {details.weight}
      </p>
      <div className="flex gap-5 items-start">
        <h3 className="text-[#38332C] font-bold text-2xl mb-2">Abilities:</h3>
        <ul className="flex flex-wrap gap-5 text-[#38332C]">
          {details.abilities &&
            details.abilities.map((ability, index) => (
              <li
                key={index}
                className="bg-[#D6C3A9] text-[#38332C] border-1 border-[#38332C] rounded-md p-2"
              >
                {ability.ability.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="flex gap-5 items-start mt-5">
        <h3 className="text-[#38332C] font-bold text-2xl mb-2">Stats:</h3>
        <ul className="flex flex-wrap gap-5 text-[#38332C]">
          {details.stats &&
            details.stats.map((stat, index) => (
              <li
                key={index}
                className="bg-[#D6C3A9] text-[#38332C] border-1 border-[#38332C] rounded-md p-2"
              >
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
        </ul>
      </div>
      <div className="flex gap-5 items-start mt-5">
        <h3 className="text-[#38332C] font-bold text-2xl mb-2">Types:</h3>
        <ul className="flex flex-wrap gap-5 text-[#38332C]">
          {details.types &&
            details.types.map((type, index) => (
              <li
                key={index}
                className="bg-[#D6C3A9] text-[#38332C] border-1 border-[#38332C] rounded-md p-2"
              >
                {type.type.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetails;
