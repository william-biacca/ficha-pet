import PetCard from './components/PetCard';

export default function App() {
    return (
        <div>
            <h1>Ficha de Pets</h1>
            <PetCard nome="Paçoca" raca="Calopsita" especie="Ave" />
            <PetCard nome="Floquinho" raca="Calopsita" especie="Ave" />
            <PetCard nome="Chico" raca="Calopsita" especie="Ave" />
        </div>
    );
}
