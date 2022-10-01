import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Grid , Card , Wrapper} from '../StyledComponents/recipe'
import { Link } from 'react-router-dom';
function Veggie() {

  const [veggie , setVeggie] = useState([])
  const getVeggieData = async ()=> {

    const veggieItemsLocal = localStorage.getItem('veggie')
    if(veggieItemsLocal)
    {
      setVeggie(JSON.parse(veggieItemsLocal))
    }
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_DELICIOUS_API_KEY}&number=9&tags=vegetarian`)
      const data = await api.json()
      console.log(data);
      setVeggie(data.recipes)
      localStorage.setItem('veggie' , JSON.stringify(data.recipes))
    }
   
}

useEffect(()=>{
  getVeggieData()
    
},[])
return (
<Wrapper>
  <h3>Veggies Picks</h3>
  <Splide options={{
    perPage : 3 ,
    arrows : false,
    pagination :false,
    drag : "free",
    gap : "3rem",
  }}>
    
  {veggie.map((p)=>{
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

export default Veggie