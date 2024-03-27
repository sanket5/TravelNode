
import './courosal.styles.scss'
import React from 'react'
import More from '../more/more.component'
import ColorThief from 'colorthief'; // Import color-thief library


class Courosal extends React.Component {

    constructor(props) {
        super(props)
        this.state = { currentIndex: 0, color: '#ffffff' }
        this.imageList = props.imageList
        this.name = props.name
        this.description = props.description
        this.length = this.imageList.length - 1
    }



    activateCourosal = () => {
        if (this.length == 0) return
        setInterval(() => {
            this.updateSlide()
            this.next()
        }, 10000)
    }

    updateSlide = () => {
        document.querySelectorAll('.courosal img').forEach((im) => {
            if (im?.className.match(this.name)) {
                im?.classList.remove('opacityZero')
            }
        })
        document.getElementsByClassName(this.name + this.state.currentIndex)[0]?.classList.add('opacityZero')
    }

    checkLimits = (currentIndex, operation) => {
        if (operation == 'next') {
            if (currentIndex < this.length) {
                return true
            }
            return false
        } else {
            if (currentIndex != 0) {
                return true
            }
            return false
        }

    }
    next = () => {
        if (this.checkLimits(this.state.currentIndex, 'next')) {
            this.setState({ currentIndex: this.state.currentIndex += 1 })
        } else {
            this.setState({ currentIndex: 0 })
        }
        this.updateSlide()
    }

    previous = () => {
        if (this.checkLimits(this.state.currentIndex, 'pre')) {
            this.setState({ currentIndex: this.state.currentIndex -= 1 })

        } else {
            this.setState({ currentIndex: this.length })
        }
        this.updateSlide()

    }

    componentDidMount() {
        console.log('in mount', this.imageList)
        const colorThief = new ColorThief();

        // Load the image
        const image = new Image();
        image.crossOrigin = "Anonymous";
        image.src = this.imageList[0];


        // Once the image is loaded, extract the dominant color
        image.onload = () => {
            console.log('onload')
            const dominantColor = colorThief.getColor(image);
            const rgbColor = `rgb(${dominantColor.join(',')})`;
            console.log(rgbColor)
            this.setState({ color: rgbColor })
        };
        this.activateCourosal()
        this.updateSlide()
    }


    render() {
        return (
            <div>
                <div className="courosal" style={{ backgroundColor: this.state.color }}>
                    <img src={this.imageList[0]} className={this.name + 0 + ' ' + 'courosal_image'} onContextMenu={() => false} />
                    {
                        // this.imageList.map((image, i) => <img key={i} className={this.name + i + ' ' + 'courosal_image'} src={image} alt={i} onContextMenu={() => false} />)
                    }
                    <span className="courosal_arrow right" onClick={this.next}>&#8666;</span>
                    <span className="courosal_arrow left" onClick={this.previous}>&#8667;</span>
                </div>
                <div className="card_details">
                    <h2 className="card_details_name">{this.name}</h2>
                    <span className="card_details_description"> {this.description}</span>
                </div>
            </div>

        )
    }



}


export default Courosal