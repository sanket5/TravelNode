
import React from "react"
import placeService from "../../services/place.service"
import Card from "../card/card.component"
import './places.styles.scss'

class Places extends React.Component{

    constructor(props){
        super(props)
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
                    this.state.places.map((place,i)=><Card onClick={(event)=>this.navigateToPlaceDetails(event,place.name)} key={i} place={place}></Card>)
                    }
                </div>


            </div>
        )
    }

    navigateToPlaceDetails = (e,name)=>{
        if(e.target.classList.contains('courosal_arrow')) return null
        this.props.history.push(`/places/${name}`)
    }

    componentDidMount(){
        this.fetchPlaces()
    }
}

export default Places

