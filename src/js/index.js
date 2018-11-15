import '../styles/main.scss'
import credentials from './credentials'
import getImages from './resources/google.js'
import getMusicDetails from './resources/musicbrainz.js'

const input = document.querySelector("input")
const bandTitle =  document.querySelector(".bandName")
const bandDate =  document.querySelector(".bandDate")
const bandCountry = document.querySelector(".bandCountry")
const main = document.querySelector("main")
const body = document.querySelector("body")

input.addEventListener("blur", function(e){
    main.style.width = "25vw"
  getMusicDetails(input.value)
  .then(function(data){
    bandTitle.textContent = data.data.artists[0].name
    bandCountry.textContent = data.data.artists[0].area.name
    bandDate.textContent = 
    data.data.artists[0]["life-span"].end ? `${data.data.artists[0]["life-span"].begin} - ${data.data.artists[0]["life-span"].end}` :bandDate.textContent = `${data.data.artists[0]["life-span"].begin} - Present`
  }).catch(function(error){
    bandDate.textContent = "Nenhum resultado encontrado"
    console.log(error)
  })
    getImages(input.value).then(function(data){
      body.background = data.data.items[0].link
      body.style.opacity = "1"
    }).catch(function(error){
      console.log(erro)
    })
})






