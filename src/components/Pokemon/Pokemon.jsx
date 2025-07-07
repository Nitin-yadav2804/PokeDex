import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pokemon({ name, url }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    async function fetchPokemonDetails() {
      const response = await axios.get(url);
      setImage(response.data.sprites.other.dream_world.front_default);
    }
    fetchPokemonDetails();
  }, [url]);

  return (
    <Link
      state={{ name: `${name}`, img: image }}
      to={`/pokemon/${name}`}
      className="flex flex-col p-5 bg-[#D6C3A9] hover:bg-[#B3A28D] border-1 border-[#38332C] basis-[26%] rounded-2xl mt-10 h-[300px]"
    >
      <div className="font-bold text-xl text-center p-1 mb-1 text-[#38332C] h-[10%]">
        {name}
      </div>
      <div className="flex items-center justify-center w-full h-[90%]">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-5"
          />
        )}
      </div>
    </Link>
  );
}

export default Pokemon;
