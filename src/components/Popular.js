import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Grid , Card , Wrapper} from '../StyledComponents/recipe'
import {Link} from 'react-router-dom'

function Popular() {

  const [popular , setPopular] = useState([])

  const getPopularData = async ()=> {

        const popularItemsLocal = localStorage.getItem('popular')
        if(popularItemsLocal)
        {
          setPopular(JSON.parse(popularItemsLocal))
        }
        else {
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_DELICIOUS_API_KEY}&number=15`)
          const data = await api.json()
          console.log(data);
          setPopular(data.recipes)
          localStorage.setItem('popular' , JSON.stringify(data.recipes))
        }
       
    }
    
    useEffect(()=>{
      getPopularData()
        
    },[])
  return (
    <Wrapper>
      <h3>Most Popular recipes</h3>
      <Splide options={{
        perPage : 4 ,
        arrows : false,
        pagination :false,
        drag : "free",
        gap : "3rem",
      }}>
        
      {popular.map((p)=>{
        return (
          <SplideSlide key={p.id}>
            <Link to={'recipe/' + p.id}>
            
          <Card>
            <p>{p.title}</p>
            <img src={p.image} title={p.title} ></img>
            <Grid/>
          </Card>
          </Link>
          </SplideSlide>
        )
      })}
      </Splide>
    </Wrapper>
  )
}

export default Popular