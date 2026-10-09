import PetCard from './components/PetCard';

export default function App() {
    return (
        <div>
            <h1>Ficha de Pets</h1>
            <PetCard nome="Paçoca" especie="Calopsita" />
            <PetCard nome="Floquinho" especie="Calopsita" />
            <PetCard nome="Chico" especie="Calopsita" />
        </div>
    );
}
