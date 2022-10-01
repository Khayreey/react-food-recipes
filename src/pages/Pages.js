import {Route,Routes , BrowserRouter, Link, useLocation } from 'react-router-dom'
import React from 'react'
import Home from './Home'

import Cuisine from './Cuisine'
import Categories from '../components/Categories'
import Search from '../components/Search'
import Searched from './Searched'
import RecDetail from './RecDetail'
import {GiKnifeFork} from 'react-icons/gi'
import { Nav } from '../StyledComponents/recipe'
import styled from 'styled-components'
import {AnimatePresence} from 'framer-motion'
function Pages() {

  const location = useLocation() ;
  return (
    
     <>
     
       <Nav>
       
        <GiKnifeFork></GiKnifeFork>
        <LinkD to={'/'}>
         Delicious
        </LinkD>
       </Nav>
     <Search /> 
     <Categories/>
     <AnimatePresence exitBeforeEnter>
        <Routes Location={location} key={location.pathname} >
          <Route path="/" element={<Home />} /> 
          <Route path="/cuisine/:type" element={<Cuisine/>} /> 
          <Route path="/searched/:search" element={<Searched/>}/> 
          <Route path="/recipe/:name" element={<RecDetail/>}/> 
        </Routes>
        </AnimatePresence>
        </>
  )
}
const LinkD = styled(Link)`
text-decoration : none;
font-family: cursive ;
color: #313131;
`
export default Pages