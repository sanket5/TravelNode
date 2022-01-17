

import Courosal from '../courosal/courosal.component'
import More from '../more/more.component'
import './card.styles.scss'


const Card = ({place:{name,imageUrl,description}})=>(
    <div className="card">
        {/* <img className="card_image" src={imageUrl} alt="test"/> */}
        <Courosal key={name} imageList={imageUrl} name={name} description={description}></Courosal>
        {/* <div className="card_details">
            <h2 className="card_details_name">{name}</h2>
            <span className="card_details_description"> <More text={description} length="105"></More> </span>
        </div> */}
    </div>
)

export default Card 