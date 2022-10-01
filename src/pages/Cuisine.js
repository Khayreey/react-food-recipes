import React, { useEffect, useState } from 'react'
import {Link , useParams} from 'react-router-dom'
import { Card, Grid } from '../StyledComponents/searched'

function Cuisine() {
    let params = useParams()
    const [cuisine , setCuisine] = useState([])
    const getCuisine = async (cuisineName) => {
    const data = await fetch
       (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_DELICIOUS_API_KEY}&cuisine=${cuisineName}`)
    const cuisineData =await data.json()
      setCuisine(cuisineData.results) 
      
    }
    useEffect(()=>{
        getCuisine(params.type)
        console.log(params.type);
    },[params.type])
  return (
    <Grid
    animate={{opacity:1}}
    initial={{opacity:0}} 
    exit={{opacity:0}}
    transition={{duration : .5 }} >
       {cuisine.map((item) => {
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

export default Cuisine