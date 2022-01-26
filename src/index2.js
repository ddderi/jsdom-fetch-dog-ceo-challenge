function fetchBreed(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => pushBreed(json))
  }

  function fetchImg(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
  .then(json => pushImg(json))
    
}


function time(){
    let List = document.getElementsByClassName('listOfLi')
    for(let i=0;i<List.length;i++){
        List[i].addEventListener('click', function(e){
            List[i].style.color = 'red'
            
        })
    }}


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
            parent.append(child)
          });
        }


        
document.addEventListener('DOMContentLoaded', function(){
    
    fetchImg();
    fetchBreed();
        })


setTimeout(time, 1000)


const select = document.getElementById('breed-dropdown')

select.addEventListener('change', addactivity, false)
    
function addactivity(){
    let  letter = event.target.value
    if(letter === 'a'){afterwards('a')}
    else if(letter === 'b'){afterwards('b')}
    else if(letter === 'c'){afterwards('c')}
    else if(letter === 'd'){afterwards('d')}
      
}

function supp(){
    let parent = document.getElementById('dog-breeds')
    let List = document.getElementsByClassName('listOfLi')
    parent.remove(List)
}


function afterwards(b){
    let List = document.getElementsByClassName('listOfLi')
    newList = Array.from(List)
    supp()
    let parent = document.createElement('ul')
    parent.id = 'dog-breeds'
    document.body.append(parent)
    
    newArray = newList.filter(word => word.textContent[0] == b)
    newArray.forEach(a => {
        let child = document.createElement('li')
        child.textContent = a.textContent
        parent.append(child)
    })
}


   


    
    
