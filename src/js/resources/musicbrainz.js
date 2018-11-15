import axios from'axios'


function getMusicDetails(input){
  return new Promise(function (resolve, reject) {
  axios.get(`http://musicbrainz.org/ws/2/artist?query=${input}&inc=aliases&fmt=json`)
  .then(function(response){
    resolve(response)
  })
  .catch(function(error){
    reject("No results found")
  })
  })
}

export default getMusicDetails


