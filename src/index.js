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
}

onPageLoad()
    
    


