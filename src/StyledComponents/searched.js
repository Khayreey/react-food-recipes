import styled from 'styled-components'
import {motion} from 'framer-motion'
export const Card = styled(motion.div)`
 cursor: pointer;
img{
    width : 100%;
    border-radius:2rem;
}
a {
   text-decoration : none;     
}
p{
    text-align : center;
    padding : 1rem;
}
`
export const Grid = styled(motion.div) `
display : grid;
grid-template-columns: repeat(auto-fit ,minmax(20rem,1fr));
grid-gap : 3rem;
`