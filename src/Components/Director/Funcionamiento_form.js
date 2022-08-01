import React from 'react'
import { Formulario_Director } from './Formulario_Director'

export const Funcionamiento_form = () => {
    const addtaks = () =>{
        console.log('newtask')
    }
    return (
    <div>
        <div>
            <Formulario_Director addoredit={addtaks}/>
        </div>
    </div>
  )
}
