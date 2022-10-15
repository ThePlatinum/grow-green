
export default function PlantSearch() {
  return (
   <div className='d-flex justify-content-center'>
     <div class="input-group my-5 w-md-75">
      <input type="text" class="form-control rounded-0" placeholder="Search Plants..." aria-label="Search Planet" aria-describedby="serach_plants" />
      <button class="btn btn-outline-secondary rounded-0 px-4" type="button" id="search_plant_btn">Search</button>
    </div>
   </div>
  )
}