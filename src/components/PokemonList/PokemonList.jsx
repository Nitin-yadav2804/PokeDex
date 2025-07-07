import { useEffect, useState } from "react"
import Pokemon from "../Pokemon/Pokemon"
import axios from "axios"


function PokemonList() {

    const defaultUrl = 'https://pokeapi.co/api/v2/pokemon'

    let [pokemonList, setPokemonList] = useState([])
    let [url, setUrl] = useState(defaultUrl)
    let [nextUrl, setNextUrl] = useState(null)
    let [prevUrl, setPrevUrl] = useState(null)

    useEffect(() => {
        async function fetchPokemonList() {

            const response = await axios.get(url)
            setNextUrl(response.data.next)
            setPrevUrl(response.data.previous)
            setPokemonList(response.data.results)
        
        }   
        fetchPokemonList()
    }, [url])

    return(
        <>
        <div className="flex justify-between w-[800px] mt-5 mb-5">
                <button
                    className="bg-[#D6C3A9] hover:bg-[#B3A28D] text-[#38332C] border-2 border-[#38332C] font-bold py-2 px-4 rounded-xl cursor-pointer"
                    onClick={() => {
                        if (prevUrl) {
                            setUrl(prevUrl)
                        }
                    }}
                >
                    Previous
                </button>
                <button 
                    className="bg-[#D6C3A9] hover:bg-[#B3A28D] text-[#38332C] border-2 border-[#38332C] font-bold py-2 px-4 rounded-xl cursor-pointer"
                    onClick={() => {
                        if (nextUrl) {
                            setUrl(nextUrl)
                        }
                    }}
                >
                    Next
                </button>
            </div>
            <div className="flex flex-wrap justify-evenly items-center bg-[#D6C3A9] p-10">
                {
                    pokemonList.map((pokemon) =>{
                        return (<Pokemon 
                            key={pokemon.name} 
                            name={pokemon.name}
                            url={pokemon.url}
                        />)
                    })
                }
            </div>
        </>
    )
}

export default PokemonList 