interface PokePopupProps {
    pokemon: {
        id: number;
        name: string;
        types: string[];
        height: number;
        weight: number;
        abilities: string[];
        stats: {
        hp: number;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
        };
    };
    onClose: () => void;
    
}

const PokePopup = ({pokemon, onClose}:PokePopupProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-96 h-96 rounded-lg p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">{pokemon.name}</h1>
                    <button onClick={onClose} className="text-xl font-bold">X</button>
                </div>
                <div className="flex justify-between items-center">
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Abilities:</p>
                    <ul>
                        {pokemon.abilities.map((ability, index) => (
                            <li key={index}>{ability}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-between items-center">
                    <p>Stats:</p>
                    <ul>
                        <li>HP: {pokemon.stats.hp}</li>
                        <li>Attack: {pokemon.stats.attack}</li>
                        <li>Defense: {pokemon.stats.defense}</li>
                        <li>Special Attack: {pokemon.stats.special_attack}</li>
                        <li>Special Defense: {pokemon.stats.special_defense}</li>
                        <li>Speed: {pokemon.stats.speed}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokePopup;