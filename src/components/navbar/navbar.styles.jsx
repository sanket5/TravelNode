
import styled from 'styled-components'
import { Link} from 'react-router-dom'


export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    color: black;
    font-size: x-large;
    text-decoration: none;
    border-radius: 10px;
    margin: 0 5px;
    &:hover{
        background-color: black;
        color:white;
        box-shadow: 2px 2px 2px #626255;
    }
`