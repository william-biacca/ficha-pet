export default function PetCard({ nome, raca, especie }) {
    return (
        <div>
            <h2>{nome}</h2>
            <p>{raca}</p>
            <p>{especie}</p>
        </div>
    );
}
