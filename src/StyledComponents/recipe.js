import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'
export const Wrapper = styled(motion.div) `
  margin : 1rem 3rem ;
`;
export const Card = styled(motion.div) `
 min-height: 15rem;
 border-radius : 1rem;
 position:relative;
 overflow:hidden;
 img{
  border-radius : 2rem;
  cursor:pointer;
  position:absolute;
  left : 0 ;
  width : 100%;
  height : 100% ;
  object-fit : cover ;
 }
 p {
  position :absolute;
  right : 50% ;
  bottom : 10% ;
  z-index : 10;
  transform : translate(-50%,-10%) ;
  width : 100%;
  height : 40% ;
  font-weight : 600 ;
  font-size :1rem ;
  text-align :center;
  color : white ;
 }
`
export const Grid = styled(motion.div) `
position :absolute;
z-index:3;
width : 100%;
height:100%;
background : linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.4))
`
export const List = styled(motion.div)`
display :flex ;
justify-content : center;
margin : 2rem 0rem ;
`
export const Slink = styled(NavLink)
`
display:flex ;
flex-direction: column;
justify-content :center ;
align-items: center;
border-radius: 50%;
height: 6rem;
width: 6rem;
text-decoration: none;
transform: scale(.8);
background: linear-gradient(35deg,#494949,#313131);
margin-right: 2rem;
cursor: pointer;

p{
  color:white;
  font-size: .8rem ;
}
svg {
  color:white ;
  font-size:1.5rem;
}
&.active {
  background: linear-gradient(to right,#00BFFF,#8A2BE2);
}
`

export const FormStyle = styled(motion.form)`
margin: 2rem 10rem;
div{
  position: relative;
  width: 100%;
  input {
    border:none ;
    background: linear-gradient(35deg,#494949,#313131);
    border:none;
    border-radius:1rem;
    font-size:1.5rem ;
    color:white;
    padding: .8rem 3rem;
    outline:none;
    width: 100%;
 
  }
  svg {
     position: absolute;
     top: 50%;
     left: 0;
     transform: translate(100% , -50%) ;
     color:white ;
  }
}
`
export const DetailWrapper = styled(motion.div)`
 margin-top:3rem;
 margin-bottom:5rem;
 display:flex;
 .active{
  background: linear-gradient(35deg,#494949,#313131);
  color :white;
 }
p{
  margin-bottom:2rem;
  font-size: 1.2rem;
}
li{
  font-size:1.2rem ;
  line-height:2.5rem ;
}
ul {
  margin-top: 2rem;
}
`
export const ButtonA = styled(motion.button)`

padding: 1rem 2rem;
color:#313131 ;
background:white ;
border: 2px solid black;
text-align:center;
font-weight:700;
margin-right:1rem ;
margin-bottom:2rem ;
`

export const Info = styled(motion.div)`
margin-left:5rem;


`
export const Nav = styled(motion.div)`
padding: .5rem 0rem;
display:flex ;
justify-content:flex-start;
align-items:center;
  svg{
    font-size: 2.5rem;
    color: #313131;
  }
`