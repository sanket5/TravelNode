import { useEffect, useState } from 'react';
import placeService from "../../services/place.service"
import './details.styles.scss'
import Card from '../../components/card/card.component';
import ImageGalleryDialog from '../../components/galary/galary.component';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPlaces, setSelectedItem, setSelectedPlace } from '../../slices/place.slice'




const PlaceDetails = () => {
    const { name, item } = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch()



    const places = useSelector(state => state.places.selected)
    const [showGallary, setShowGallary] = useState(false)
    const [dataToShow, setDataToShow] = useState()


    const fetchPlaces = () => {
        placeService.getPlaces(name)
            .then(data => {
                dispatch(setSelectedItem(null))
                dispatch(setSelectedPlace(data?.data?.data[0]))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => { if (!item) fetchPlaces() }, [name])

    const selectPlace = (name) => {
        navigate(`${name}`)
    }

    useEffect(() => {
        if(item){
            const s = places.details.find(d=> d.name === item)
            setDataToShow(s)
        }else{
            setDataToShow(places)
        }

    }, [places, item, name])



    return (
        <div className='details'>
            <div className='details_title'>{dataToShow?.name}</div>
            <button onClick={() => setShowGallary(true)}> Gallary </button>
            <div className='details_banner'>
                <img src={dataToShow?.imageUrl[0]} />
            </div>
            <div className='details_info'>
                <div className='details_info_description'>
                    {dataToShow?.description}
                </div>
                <div className='details_info_location'>
                </div>
            </div>
            {
                dataToShow?.details?.length && (
                    <div className='details_places'>
                        <div className='details_places_title'> Must Visit </div>
                        <div className='details_places_cards'>
                            {
                                dataToShow.details.map((place, i) => <Card onClick={(event) => selectPlace(place.name)} key={i} place={place}></Card>)
                            }
                        </div>
                    </div>
                )
            }

            {
                dataToShow?.imageUrl?.length && (
                    <ImageGalleryDialog open={showGallary} images={dataToShow?.imageUrl} handleClose={() => setShowGallary(false)} ></ImageGalleryDialog>
                )
            }

        </div>

    )
}


export default PlaceDetails