import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";

function Search() {
  const defaultUrl = "https://pokeapi.co/api/v2/pokemon/";
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (!searchTerm) {
      setPokemonData(null);
      setError(null);
      return;
    }

    async function fetchPokemonDetails() {
      try {
        const response = await axios.get(defaultUrl + searchTerm.toLowerCase());
        setPokemonData(response);
        setError(null);
      } catch (err) {
        setPokemonData(null);
        setError("Pokemon not found");
      }
    }
    fetchPokemonDetails();
  }, [searchTerm]);

  return (
    <div>
      <input
        className="w-[800px] h-[50px] p-5 border-2 border-[#38332C] outline-none rounded-xl"
        placeholder="Search for a Pokemon by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {error && <div>{error}</div>}
      {pokemonData && (
        <Pokemon
          name={pokemonData.data.name}
          url={defaultUrl + searchTerm.toLowerCase()}
        />
      )}
    </div>
  );
}

export default Search;
