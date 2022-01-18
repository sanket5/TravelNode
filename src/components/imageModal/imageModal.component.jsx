

import { useState } from 'react'
import './imageModal.styles.scss'

const ImageModal = (props)=>{

    const [isModal, setIsModal] = useState(false)
    const toggleModal = ()=>{
        setIsModal(!isModal)
    }


return(
    <div>
        <div className='image' onClick={toggleModal}><img src={props.image} /></div>
        {
            isModal?
            <div className='modal' onClick={toggleModal}>
                <img src={props.image} alt="" />
            </div>:
            null
        }
    </div>
)

}

export default ImageModal