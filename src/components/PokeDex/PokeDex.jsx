import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"


function PokeDex() {
    return(
        <div className="flex flex-col items-center bg-[#D6C3A9] w-full h-[100vh] overflow-auto">
            <h1 className="color-[#38332C] font-bold text-4xl mb-5 p-10">PokeDex</h1>
            <Search />
            <PokemonList />
        </div>
    )
}

export default PokeDex