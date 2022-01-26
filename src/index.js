console.log('%c HI', 'color: firebrick')

function fetchImg(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
  .then(json => console.log(json))
    return fetch('https://dog.ceo/api/breeds/image/random/4')
}

function fetchBreed(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => pushBreed(json))
}


function pushImg(dogs) {
    const main = document.getElementById('dog-image-container');
    
    let dogImg = dogs.message
    
    dogImg.forEach(dog => {
        imageTag = document.createElement('img')
        imageTag.src = dog 
            main.append(imageTag)
      });
    }
    
    function pushBreed(dogs){
      const parent = document.getElementById('dog-breeds')
      let breedLi = dogs.message
      let breedLiarr = Object.keys(breedLi)
      breedLiarr.forEach(dog => {
          let child = document.createElement('li')
          child.innerHTML = dog
          child.className = 'listOfLi'
          parent.appendChild(child)
        });
      }


  document.addEventListener('DOMContentLoaded', function(){
    fetchImg();
    fetchBreed();
})

// document.addEventListener('click', function(e){
//   console.log(e)
// })

// const parent = document.getElementById('dog-breeds')
// const child = parent.childNodes

// console.log(child)



// for (let i=0;i<lists.length;i++){
//   console.log(lists[i].innerText)
// }
// let newArray = Array.from(lists)

// .forEach(list => list.addEventListener('click', function(e){
//   console.log(e)
// }))



//let lists = document.getElementsByClassName('listOfLi'); 

let lists = document.getElementsByClassName('listOfLi');

//array(lists)


// for(var i=0;i<NN.length;i++){ 
// NN[i].addEventListener("click", function(e){
//   console.log(e)})}




