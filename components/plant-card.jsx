
export default function PlantCard({ plant }) {
  return (
    <div className="card rounded-0 text-center" key={plant.id} onClick={() => location.href = `plant/${plant.id}`} >
      <img src={plant.picture} class="card-img-top" alt={plant.name} />
      <div class="card-body">
        <h5 class="card-title">{plant.name}</h5>
        <p>{plant.description}</p>
      </div>
    </div>
  )
}