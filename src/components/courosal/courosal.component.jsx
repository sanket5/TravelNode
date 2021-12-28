
import './courosal.styles.scss'
import React from 'react'

class Courosal extends React.Component{

    constructor(props){
        super(props)
        this.state = {currentIndex: 0}
        this.imageList = props.imageList
        this.name = props.name
        this.length = this.imageList.length-1

    }

    activateCourosal = ()=>{
        if(this.length == 0) return
        setInterval(()=>{
            this.updateSlide()
            this.next()
        }, 10000)
    }

    updateSlide = ()=>{
        document.querySelectorAll('.courosal img').forEach((im)=>{
            if(im.className.match(this.name)){
                im.classList.remove('opacityZero')
            }
        })
        document.getElementsByClassName(this.name+this.state.currentIndex)[0].classList.add('opacityZero')
    }

    checkLimits = (currentIndex, operation)=>{
        if(operation == 'next'){
            if(currentIndex < this.length){
                return true
            }
            return false
        }else{
            if(currentIndex != 0){
                return true
            }
            return false
        }

    }
    next = ()=>{
        if(this.checkLimits(this.state.currentIndex,'next')){
            this.state.currentIndex+=1
        }else{
            this.state.currentIndex = 0
        }
        this.updateSlide()
    }

    previous = ()=>{
        if(this.checkLimits(this.state.currentIndex,'pre')){
            this.state.currentIndex-=1
        }else{
            this.state.currentIndex = this.length
            
        }
        this.updateSlide()

    }

    componentDidMount(){
        this.activateCourosal()
        this.updateSlide()
    }

    render(){
        return (
            <div className="courosal">
                {
                    this.imageList.map((image, i)=><img key={i} className={this.name+i+' '+'courosal_image'}  src={image} alt={i} onContextMenu={()=> false} />                )
                }
                <span className="courosal_arrow right" onClick={this.next}>&#8666;</span>
                <span className="courosal_arrow left" onClick={this.previous}>&#8667;</span>
            </div>
        )
    }



}


export default Courosal