import Banner from "../../components/banner/banner.component"
import Courosal from "../../components/courosal/courosal.component"
import Places from "../../components/places/places.component"


const HomePge = (props)=>(
    <div>
        <div>
            <Banner></Banner>
        </div>
        <Places history={props.history} ></Places>
    </div>
)
export default HomePge