
import axios from 'axios'

const placeUrl = 'https://node-server-mp.herokuapp.com/travel/place'
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