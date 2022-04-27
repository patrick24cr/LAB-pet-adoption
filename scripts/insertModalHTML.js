function insertModalHTML() {
  document.querySelector("#modalDiv").innerHTML = `<div class="modal fade" id="add-animal" tabindex="-1" aria-labelledby="add-animal" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-md-down">
  <div class="modal-content">
  <div class="modal-header">
  <h5 class="modal-title">Add Animal</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body" id="modal-body">  
  
  <form>
  <div class="form-floating mb-3">
  <input class="form-control form-control-lg" type="text" placeholder="name" id="name" aria-label="name" required>
  <label for="videoId">Name</label>
  </div>
  
  <div class="form-floating mb-3">
  <input class="form-control form-control-lg" type="text" placeholder="color" id="color" aria-label="color" required>
  <label for="title">Color</label>
  </div>
  
  <div class="form-floating mb-3">
  <select class="form-select form-control-lg" id="animal" aria-label="animal" required>
  <option value="">What animal?</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="dino">Dino</option>
  </select>
  <label for="category">Category</label>
  </div>
  
  <div class="form-floating mb-3">
  <input class="form-control form-control-lg" type="text" placeholder="special-skill" id="special-skill" aria-label="special-skill" required>
  <label for="title">Special Skill</label>
  </div>
  
  <div class="form-floating mb-3">
  <input class="form-control form-control-lg" type="text" placeholder="image-url" id="image-url" aria-label="title" required>
  <label for="title">URL of Image</label>
  </div>
  
  <button type="submit" class="btn btn-success"><!--data-bs-dismiss="modal"-->
  Submit
  </button>
  </form>
  </div>
  </div>
  </div>
  </div>`
}

export default insertModalHTML
