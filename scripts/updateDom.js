import pets from "./data.js"

function updateDom(taco = "all") {
  let domStringToInsert = ""
  
  if (taco === "all") {
    for (const particularPet of pets) {
      domStringToInsert += `<div class="card text-center">
      <div class="card-header">
      <ul>
      <li><button class="btn btn-danger" id="fakedelete--${particularPet.id}">X</button></li>
      <li>${particularPet.name}</li>
      <li><button class="btn btn-danger" id="delete--${particularPet.id}">X</button></li>
      </ul>
      </div>
      <div class="imageDiv">
      <img  src="${particularPet.imageUrl}" class="card-img-top" alt="image of pet">
      </div>
      <div class="card-body">
      <h6 class="card-title">${particularPet.color}</h6>
      <p class="card-text">${particularPet.specialSkill}</p>
      </div>
      <div class="card-footer footer-for-${particularPet.type}"">
      ${particularPet.type}
      </div>
      </div>`
    }
    
  } else { //if lastFilterPressed is anything other than 'all'
    for (const particularPet of pets) {
      if (particularPet.type === taco) {
        domStringToInsert += `<div class="card text-center">
        <div class="card-header">
        <ul>
        <li><button class="btn btn-danger" id="fakedelete--${particularPet.id}">X</button></li>
        <li>${particularPet.name}</li>
        <li><button class="btn btn-danger" id="delete--${particularPet.id}">X</button></li>
        </ul>
        </div>
        <div class="imageDiv">
        <img  src="${particularPet.imageUrl}" class="card-img-top" alt="image of pet">
        </div>
        <div class="card-body">
        <h6 class="card-title">${particularPet.color}</h6>
        <p class="card-text">${particularPet.specialSkill}</p>
        </div>
        <div class="card-footer footer-for-${particularPet.type}"">
        ${particularPet.type}
        </div>
        </div>`
      }
    }
  }
  document.querySelector("#mainDiv").innerHTML = domStringToInsert;
}

export default updateDom
