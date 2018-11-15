import credentials from '../credentials'
import axios from 'axios'

function getImages (input){
  return new Promise(function (resolve, reject) {
  axios.get(`https://www.googleapis.com/customsearch/v1?key=${credentials.google.key}&cx=${credentials.google.cx}&searchType=image&imageType=huge&q=${input}`)
  .then(function(response){
    resolve(response)
  })
  .catch(function(error){
    reject("No results found")
    })
  })
}

export default getImages