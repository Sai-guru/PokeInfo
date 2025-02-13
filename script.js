
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
    imgElement.src =  data.sprites.front_shiny;;
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
    pokeAbilities.textContent =  data.abilities.map(abil => abil.ability.name);
    console.log(data);
  }
  catch (error) {
    console.error(error);
  }
};

