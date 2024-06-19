console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(res){
   
    return res.json();
    
})
.then(function(data){ 
    console.log(data);
    data.message.forEach(function(url){
        
        const image = document.createElement('img');
        image.src = url;
        image.style.width = '400px';
        const divList = document.getElementById('dog-image-container');
        divList.appendChild(image); 
    });
})
.catch(function(error){
    console.log(error);
});


//Challenge 2

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedList = document.getElementById('dog-breeds');
fetch("https://dog.ceo/api/breeds/list/all")
.then(function(res){
    
    return res.json();
})
.then(function(data) {
    console.log(data);
    data = responseData;
   for (const breed in data.message) {
      const breedName = document.createElement('li');
      breedName.textContent = breed;
      breedName.id = `click-${breed}`;   
        
      breedList.appendChild(breedName);      
    }
    return breedList;
})
.catch(function(error){
    console.log(error);
})


//Challenge 3

console.log(breedList)

console.log(breedList.innerHTML)

breedList.addEventListener('click', clickMe);

function clickMe(event){
    console.log("I was clicked.");
    event.target.style.color = "blue";

}


//Challenge 4
const dropDown = document.getElementById('breed-dropdown');
const optionValue = document.createElement('option');
for (let i = 69; i <= 90; i++) {
    const letter = String.fromCharCode(i).toLowerCase();
    const option = document.createElement('option');
    option.value = letter;
    option.textContent = letter;
    dropDown.appendChild(option);
  }
  
dropDown.addEventListener('change', filterBreeds);
let originalData;
fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    originalData = data;
    filterBreeds(data); // Pass the data variable as a parameter
  })
  .catch(function(error) {
    console.log(error);
  });

function filterBreeds() {
    const selectedLetter = dropDown.value;
  
   
    breedList.innerHTML = '';
  
    
    for (const breed in originalData.message) {
      if (breed.startsWith(selectedLetter)) {
        const breedName = document.createElement('li');
        breedName.textContent = breed;
        
  
        breedList.appendChild(breedName);
      }
    }
  }
