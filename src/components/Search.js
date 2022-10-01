import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {FormStyle} from '../StyledComponents/recipe'
import {useNavigate} from 'react-router-dom'
function Search() {

    const [input , setInput] = useState("")
    const navigate = useNavigate()
    const sumbitHandler = (e)=>{
      e.preventDefault();
      navigate('/searched/' + input)
    }
  return (
    <FormStyle onSubmit={sumbitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input type="text"  onChange={(e)=> setInput(e.target.value)} value={input}/>
        </div>
    </FormStyle>
  )
}


export default Search