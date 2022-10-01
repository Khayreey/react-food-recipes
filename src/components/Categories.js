import React from 'react'
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import { List, Slink } from '../StyledComponents/recipe'
import {NavLink} from 'react-router-dom'

function Categories() {
  return (
    <List>
        <Slink to={'cuisine/Italian'}>
            <FaPizzaSlice/>
            <p>Italian</p>
        </Slink>
        <Slink to={'cuisine/American'}>
            <FaHamburger/>
            <p>American</p>
        </Slink>
        <Slink to={'cuisine/Thai'}>
            <GiNoodles/>
            <p>Thai</p>
        </Slink>
        <Slink to={'cuisine/Indian'}>
            <GiChopsticks/>
            <p>Indian</p>
        </Slink>
    </List>
  )
}
export default Categories