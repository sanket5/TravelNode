
import axios from 'axios'

const placeUrl = 'https://jade-distinct-cricket.cyclic.app/travel/place'
// const placeUrl = 'http://localhost:3000/travel/place'
const placeService = {}

placeService.getPlaces = (placeName)=>{
    return axios.get(`${placeUrl}/${placeName?placeName:''}`)
        .then(res=>{
            return res
        })
        .catch(err=>{
            throw(err)
        })
}

export default placeService