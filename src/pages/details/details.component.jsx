import { useEffect, useState } from 'react';
import placeService from "../../services/place.service"
import './details.styles.scss'
import Card from '../../components/card/card.component';
import Galary from '../../components/galary/galary.component';



const PlaceDetails = (props)=>{

    const [places,setPlaces] = useState(null)


    const fetchPlaces = ()=>{ 
        const place = props.match.params.name
        placeService.getPlaces(place)
            .then(data=> {setPlaces(data?.data?.data[0])})
            .catch(err=> console.log(err))
    }

    useEffect(()=>{fetchPlaces()},[])

    const navigateToPlaceDetails = ()=>{

    }



    return(
        <div className='details'>
            <div className='details_title'>{places?.name}</div>
            <div className='details_banner'>
                <img src={places?.imageUrl[0]} />
            </div>
            <div className='details_info'>
                <div className='details_info_description'>
                    {places?.description}
                </div>
                <div className='details_info_location'>
                </div>
            </div>
            <div className='details_places'>
                <div className='details_places_title'> Must Visit </div>
                <div className='details_places_cards'>
                {
                    places?.details?.map((place,i)=><Card onClick={(event)=>navigateToPlaceDetails(event,place.name)} key={i} place={place}></Card>)
                }
                </div>
            </div>
            <div className='details_galary'>
                <div className='details_galary_title'> Galary </div>
                <div>
                    <Galary imageList={places?.imageUrl}></Galary>
                </div>
            </div>
        </div>

    )
}


export default PlaceDetails