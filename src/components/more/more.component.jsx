

const More = ({text,length})=>{
    console.log(text)
    if(text.length > length){
        return text.substring(0,length-3)+'...'
    }
    return text
}

export default More