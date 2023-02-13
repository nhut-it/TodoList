import React from 'react'
import styled, { css } from 'styled-components'
import Button from '@atlaskit/button'
import CheckIcon from '@atlaskit/icon/glyph/check'
const ButtonStyle=styled(Button)`
    margin: 5px 0;
    text-align: left;
    &,
    &:hover{
        ${props=>props.completed==='true' && css`
            text-decoration: line-through;
        
        `}
    }
   
    &:hover{
        .check-icon{

            display: block;
        }
    }
    .check-icon{
        display: none;
        &:hover{
            background-color: #e3e3e3;
            border-radius: 4px;
        }
    }

`

export default function Todo({todo,handelBtnClickCheck}) {
    
    // console.log(handelBtnClickCheck())
  return (
    <div>
        <ButtonStyle 
        completed={todo.isComplete.toString()}
        shouldFitContainer
        iconAfter={!todo.isComplete && <span onClick={()=>handelBtnClickCheck(todo.id)} className='check-icon'><CheckIcon
        
        primaryColor='green'/></span>}
        
        >{todo.name}</ButtonStyle>
    </div>
  )
}
