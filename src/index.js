// console.log('%c HI', 'color: firebrick')

function onPageLoad() {

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => {
        data.message.forEach((url) => {
            let dogImgContainer = document.querySelector("#dog-image-container")
            let dogImg = document.createElement("img")
            dogImgContainer.append(dogImg)
            dogImg.src = url
        })
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => { 
        const breedTypes = (Object.keys(data.message))

        breedTypes.forEach(function(element) {
            let dogUL = document.querySelector("#dog-breeds")
            let breed = document.createElement('li')

            breed.textContent = element

            dogUL.appendChild(breed)

            colorLiLinks()
        })

        const dropDown = document.querySelector("#breed-dropdown")
        dropDown.addEventListener("change", (e) => filterBreed(breedTypes))
    })
}

function colorLiLinks() {
    const listItems = document.querySelectorAll('li');
    
    listItems.forEach(function (listItem) {
        listItem.addEventListener('click', function () {
            this.style.color = 'red';
        });
    });
}

function filterBreed(breedTypes) {
    const dropDown = document.querySelector("#breed-dropdown")
    const breeds = breedTypes.filter(function(breed) {
        return breed.startsWith(dropDown.value)
    })
    
    let dogUL = document.querySelector("#dog-breeds")
    dogUL.innerHTML = ""
    
    breeds.forEach(function(element) {
        let breed = document.createElement('li')

        breed.textContent = element

        dogUL.appendChild(breed)
    })
    colorLiLinks()
}


onPageLoad()




  
    


