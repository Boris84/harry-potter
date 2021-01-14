let characterList = document.getElementById("charactersList")
let hpCharacters = [];


// get user input a filter search results 

document.querySelector('input').addEventListener('keyup', (event) => {
 const searchString = event.target.value.toLowerCase();
    
 const filteredCharacters = hpCharacters.filter((character) => { 
    return character.name.toLowerCase().includes(searchString); 
      
  });
      displayCharacters(filteredCharacters);
});






// AJAX xhr request to Harry Potter API 

const loadCharacters = function() {
    
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://hp-api.herokuapp.com/api/characters', true);
xhr.onload = function() {
    
  if (this.status === 200) {
    hpCharacters = JSON.parse(this.responseText);
    displayCharacters(hpCharacters);
     console.log(hpCharacters)
  }
}
    xhr.send();
}




// formatting response object in browser 
function displayCharacters(hpCharacters) {
  
let output = '';
  
hpCharacters.forEach((character) => { 
    
  if (character.dateOfBirth && character.house) {
      
    output += 
      '<ul>' +
        `<img src="${character.image}" width="180px" height="200px">` +
        `<li>Name: ${character.name}</li>` +
        `<li>Actor: ${character.actor}</li>` + 
        `<li>DOB: ${character.dateOfBirth}</li>` +
        `<li>House: ${character.house}</li>` +
      '</ul>';
  } else {
      
      output += 
      '<ul>' +
        `<img src="${character.image}" width="180px" height="200px">` +
        `<li>Name: ${character.name}</li>` +
        `<li>Actor: ${character.actor}</li>` + 
      '</ul>';
    }
  });
    
  document.getElementById("charactersList").innerHTML = output;

}

loadCharacters();







