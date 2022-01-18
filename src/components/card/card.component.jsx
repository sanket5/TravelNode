

import Courosal from '../courosal/courosal.component'
import React from 'react'
import More from '../more/more.component'
import './card.styles.scss'


// const Card = ({place:{name,imageUrl,description}, })=>(

// )

class Card extends React.Component{
    constructor(props){
        super(props)
        this.name = props.place.name
        this.description = props.place.description
        this.imageUrl = props.place.imageUrl
    }

    render(){
        return (
            <div className="card" onClick={this.props.onClick}>
            {/* <img className="card_image" src={imageUrl} alt="test"/> */}
            <Courosal key={this.name} imageList={this.imageUrl} name={this.name} description={this.description}></Courosal>
            {/* <div className="card_details">
                <h2 className="card_details_name">{name}</h2>
                <span className="card_details_description"> <More text={description} length="105"></More> </span>
            </div> */}
        </div>
        )
    }
}

export default Card 