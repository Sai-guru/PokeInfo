
const fetchData = async() => {
  try {
    const x = document.getElementById('pokiname').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
    
    if (!response.ok) {
      throw new Error("Could not fetch the resource");
    }
    const data = await response.json();
    // For image
    const imgElement = document.getElementById("pokeImg");
    const pokiImg = data.sprites.front_shiny;
    imgElement.src = pokiImg;
    imgElement.style.display = "block";
     
    //we wanna knwo that in this API (official) they give those in below respective units to measure
    //for weight
    const pokeWeight = document.getElementById("pokeWeight");
    pokeWeight.textContent = `${data.weight} hg`; 

    // for height
    const pokeHeight = document.getElementById("pokeHeight");
    pokeHeight.textContent = `${data.height} dm`; 

    // for power attacks
    const pokeAbilities = document.getElementById("pokeAbilities");
    const abilities = data.abilities.map(ability => ability.ability.name);
    pokeAbilities.textContent = abilities.join(", ");
    console.log(data);
  }
  catch (error) {
    console.error(error);
  }
};

