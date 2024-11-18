let pikachu = document.querySelector("#pikachu");
let charmander = document.querySelector("#charmander");
let bulbasaur = document.querySelector("#bulbasaur");
async function displayit(callback, val) {
  try {
    let name = val.toLowerCase();

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    console.log(data.name);
    if (data.name == "pikachu") {
      pikachu.style.display = "block";
      charmander.style.display = "none";
      bulbasaur.style.display = "none";
    } else if (data.name == "charmander") {
      charmander.style.display = "block";
      pikachu.style.display = "none";
      bulbasaur.style.display = "none";
    } else if (data.name == "bulbasaur") {
      bulbasaur.style.display = "block";
      pikachu.style.display = "none";
      charmander.style.display = "none";
    }
  } catch (error) {
    callback(error);
  }
}
function err(err) {
  console.error(err);
}
