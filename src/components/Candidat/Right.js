import { Button } from '@material-tailwind/react'
import React from 'react'

export default function Right() {
  return (
    <div style={{flex:'3',marginTop:'15%',marginLeft:'3%'}}>
    <Button className="bg-yellow-600 hover:bg-yellow-400" style={{marginBottom:'3%'}}>Embaucher</Button>
     <ul>
        <h3><strong>Comptétences</strong></h3><br/>
        <li>html</li>
        <li>css</li>
       <li>javascript</li> 
       <li>cms</li>
       <li>Php</li>

     </ul>
     <ul>
        <h3><strong>Expériences</strong></h3><br/>
        <li>full stack web devloppeur</li>
        <li>********************</li>
       <li>***********************</li> 
       <li>***********************</li>
       <li>*************************</li>

     </ul>
    </div>
  )
}
