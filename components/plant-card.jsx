
export default function PlantCard({ plant }) {
  return (
    <div className="card" key={plant.id} onClick={() => location.href = `plant/${plant.id}`} >
      <IMg src={plant.picture} class="card-img-top" alt={plant.name} />
        <div class="card-body">
          <h5 class="card-title">{plant.name}</h5>
          <p class="card-text">{plant.description}</p>
        </div>
    </div>
  )
}