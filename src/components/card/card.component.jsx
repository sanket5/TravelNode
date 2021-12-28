

import Courosal from '../courosal/courosal.component'
import './card.styles.scss'


const Card = ({place:{name,imageUrl,description}})=>(
    <div className="card">
        {/* <img className="card_image" src={imageUrl} alt="test"/> */}
        <Courosal key={name} imageList={imageUrl} name={name}></Courosal>
        <div className="card_details">
            <h2 className="card_details_name">{name}</h2>
            <span className="card_details_description">{description}</span>
        </div>
    </div>
)

export default Card 