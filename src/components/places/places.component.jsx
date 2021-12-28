
import React from "react"
import placeService from "../../services/place.service"
import Card from "../card/card.component"
import './places.styles.scss'

class Places extends React.Component{

    constructor(){
        super()

        this.state = {
            places:[]
        }
    }

    fetchPlaces = async ()=>{
        const res = await placeService.getPlaces()
        this.setState({places: res.data.data})
    }

    render(){
        return(
            <div className="cardContainer">
                <div className="cardContainer_title">Recommended Places</div>
                <div className="cardContainer_place">
                    {
                    this.state.places.map((place,i)=><Card key={i} place={place}></Card>)
                    }
                </div>


            </div>
        )
    }

    componentDidMount(){
        this.fetchPlaces()
    }
}

export default Places

