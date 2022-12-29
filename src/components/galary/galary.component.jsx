

import './galary.styles.scss'
import ImageModal from '../imageModal/imageModal.component';



const Galary = (props)=>(
    <div className="galary">
        {
            props?.imageList?.map((image,i)=>
                <ImageModal key={i} image={image}></ImageModal>
                )
        }
    </div>
)


export default Galary