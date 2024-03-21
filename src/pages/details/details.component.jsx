import { useEffect, useState } from 'react';
import placeService from "../../services/place.service"
import './details.styles.scss'
import Card from '../../components/card/card.component';
import ImageGalleryDialog from '../../components/galary/galary.component';
import { useNavigate } from 'react-router-dom';




const PlaceDetails = (props) => {
    const navigate = useNavigate();



    const [places, setPlaces] = useState(null)
    const [showGallary, setShowGallary] = useState(false)


    const fetchPlaces = () => {
        const place = props.match.params.name
        placeService.getPlaces(place)
            .then(data => { setPlaces(data?.data?.data[0]) })
            .catch(err => console.log(err))
    }

    useEffect(() => { fetchPlaces() }, [props.match.params])

    const navigateToPlaceDetails = (e, name) => {
        if (e.target.classList.contains('courosal_arrow')) return null
        navigate(`/places/${name}`)
    }



    return (
        <div className='details'>
            <div className='details_title'>{places?.name}</div>
            <button onClick={() => setShowGallary(true)}> Gallary </button>
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
                        places?.details?.map((place, i) => <Card onClick={(event) => navigateToPlaceDetails(event, place.name)} key={i} place={place}></Card>)
                    }
                </div>
            </div>
            {
                places?.imageUrl?.length && (
                    <ImageGalleryDialog open={showGallary} images={places?.imageUrl} handleClose={() => setShowGallary(false)} ></ImageGalleryDialog>
                )
            }

        </div>

    )
}


export default PlaceDetails