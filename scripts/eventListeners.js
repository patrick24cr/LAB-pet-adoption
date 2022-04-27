import updateDom from "./updateDom.js";
import pets from "./data.js"

const eventListeners = () => {
  let lastFilterPressed = "all"


  const formModal = new bootstrap.Modal(document.querySelector('#add-animal'));
  
  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.id.includes("delete--") === true) {
      const [deleteKeyword, animalIdToDelete] = e.target.id.split("--");
      const index = pets.findIndex(taco => taco.id === animalIdToDelete);
      const updatedPets = pets.splice(index, 1);
      updateDom(lastFilterPressed);
    }
  })
  
  document.querySelector("#cat").addEventListener("click", (e) => {
    lastFilterPressed = e.target.id;
    updateDom(lastFilterPressed);
  });
  document.querySelector("#dog").addEventListener("click", (e) => {
    lastFilterPressed = e.target.id;
    updateDom(lastFilterPressed);
  });
  document.querySelector("#dino").addEventListener("click", (e) => {
    lastFilterPressed = e.target.id;
    updateDom(lastFilterPressed);
  });
  document.querySelector("#all").addEventListener("click", (e) => {
    lastFilterPressed = e.target.id;
    updateDom(lastFilterPressed);
  });
  
  document.querySelector('form').addEventListener('submit', (e) => {
    
    e.preventDefault(); // this goes in EVERY form submit to prevent page reload
    
    const newAnimalObject = {
      name: document.querySelector("#name").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#special-skill").value,
      type: document.querySelector("#animal").value,
      imageUrl: document.querySelector("#image-url").value,
      id: `${document.querySelector("#name").value}-${document.querySelector("#color").value}-${document.querySelector("#animal").value}`
    }
    
    pets.push(newAnimalObject);
    updateDom(lastFilterPressed);
    formModal.hide();
    document.querySelector('form').reset();
  })
}

export default eventListeners
