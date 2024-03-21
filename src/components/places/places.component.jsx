
import React, { useEffect, useState } from "react"
import placeService from "../../services/place.service"
import Card from "../card/card.component"
import './places.styles.scss'
import { useNavigate } from "react-router-dom"


const Places = () => {
    const navigate = useNavigate()
    const [places, setPlaces] = useState([])




    useEffect(() => {
        fetchPlaces()
    }, [])

    const fetchPlaces = async () => {
        const res = await placeService.getPlaces()
        setPlaces(res.data.data)
    }

    const navigateToPlaceDetails = (e, name) => {
        if (e.target.classList.contains('courosal_arrow')) return null
        navigate(`/places/${name}`)
    }


    return (
        <div className="cardContainer">
            <div className="cardContainer_title">Recommended Places</div>
            <div className="cardContainer_place">
                {
                    places.map((place, i) => <Card onClick={(event) => navigateToPlaceDetails(event, place.name)} key={i} place={place}></Card>)
                }
            </div>


        </div>
    )



}

export default Places

