const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

let mainSection = document.querySelector('main')
// document.addEventListener("DOMContentLoaded", () =>
//   {
//
// })

function renderTrainer(trainer)
  {
    let ul=document.createElement('ul');
    ul.setAttribute('id', `ul-for-${trainer.id}`)

    let p = document.createElement('p')
    p.innerText = `${trainer.name}`
    let addBtn = document.createElement('button');
    addBtn.setAttribute('data-trainer-id', trainer.id)
    addBtn.innerText = "Add Pokemon"
    addBtn.addEventListener ('click', event => {
    event.preventDefault()
    addPokemon(trainer.id)

    // location.reload()
    // renderPokemon(ul, pokemon)
    })

    /*
    let img = document.createElement('img')
    img.setAttribute('src', toy.image)
    img.setAttribute('class', 'pokemon-avatar')
    */
/*
    let btn = document.createElement('button')
    btn.setAttribute('class', 'like-btn')
    btn.setAttribute('id', toy.id)
    btn.innerText = "like"
    btn.addEventListener('click', (e) => {
      console.log(e.target.dataset);
      likes(e)
    })
*/  for (let pokemon of trainer.pokemons) {
      var pokeElement=document.createElement("li")
      pokeElement.innerText = pokemon.nickname
      var releaseBtn = document.createElement('button')
      releaseBtn.setAttribute ('class', 'release')
      releaseBtn.setAttribute('data-pokemon-id', pokemon.id)
      releaseBtn.innerText = 'Release'
      releaseBtn.addEventListener('click', event => {
        event.preventDefault()
        releasePokemon(pokemon, trainer.id)
        // debugger

        ul.removeChild(event.target.parentElement)
        /* somehow have to mak */
        }
/* delete the frakking pokemon that is being iterated through */
        )
    pokeElement.append(releaseBtn)
    ul.appendChild(pokeElement)
    }
    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.setAttribute('data-id', trainer.id)

    divCard.append(p, addBtn, ul)
    mainSection.append(divCard)


  }
function renderPokemon(ul, pokemon) {
  var pokeElement=document.createElement("li")
  pokeElement.innerText = pokemon.nickname
  var releaseBtn = document.createElement('button')
  releaseBtn.setAttribute ('class', 'release')
  releaseBtn.setAttribute('data-pokemon-id', pokemon.id)
  releaseBtn.innerText = 'Release'
  releaseBtn.addEventListener('click', event => {
    event.preventDefault()
    releasePokemon(pokemon, trainer.id)
    // debugger

    ul.removeChild(event.target.parentElement)
    /* somehow have to mak */
    }
/* delete the frakking pokemon that is being iterated through */
  )
  pokeElement.append(releaseBtn)
  ul.appendChild(pokeElement)
}

function getTrainers()  {
/*
get team information for each team / trainer
*/
  return fetch(TRAINERS_URL)
    .then (resp => resp.json())

}
function addPokemon(trainerId) {
  let trainerUl = document.querySelector(`#ul-for-${trainerId}`)
  var fetchObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/son"
    },
    body: JSON.stringify ({
      trainer_id: trainerId
    })

  }

  fetch(POKEMONS_URL, fetchObject)
    .then (resp => resp.json())
    .then (resp => renderPokemon(trainerUl, resp))




}
function releasePokemon(pokemon, trainer_id) {
  let pokesingURL = POKEMONS_URL + `/${pokemon.id}`
  fetch(pokesingURL, {
    method: 'delete'
    //
    // headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   }
      /*
      body: JSON.stringify ({
        "id":pokemon.id,
        "nickname": pokemon.nickname,
        "species": pokemon.
      }) */
    }).then (resp => resp.json())
}

var trainerarray = getTrainers()
trainerarray.then(trainers => trainers.forEach(trainer=>{
  renderTrainer(trainer)}))
