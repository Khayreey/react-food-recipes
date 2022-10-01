import React, { useEffect, useState } from 'react'
import {useParams , Link} from 'react-router-dom'
import { Card, Grid } from '../StyledComponents/searched'
export default function Searched() {
    let params = useParams()
    const [searchedRecipes , setSearchedRecipes] = useState([])
    const getSeachedRecipes = async (searched) => {
    const data = await fetch
     (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_DELICIOUS_API_KEY}&query=${searched}`)
    const searchedData =await data.json()
    setSearchedRecipes(searchedData.results)   
    }

    useEffect(()=>{
        getSeachedRecipes(params.search)
    } , [params.search])
  return (

    <Grid   animate={{opacity:1}}
    initial={{opacity:0}} 
    exit={{opacity:0}}
    transition={{duration : .5 }} >
    {searchedRecipes.map((item) => {
     return (
         <Card key={item.id}>
             <Link to={'/recipe/' + item.id}>
             <img src={item.image}></img>
             <p>{item.title}</p>
             </Link>
         </Card>
     )
    })}
 </Grid>
  )
}
