import { LeadText } from '@material-tailwind/react'
import React from 'react'
import Portflio from './Portflio'

export default function Center() {
  return (
    <div style={{flex:'4',marginTop:'15%'}}>

    <h3><strong>Description de profile</strong></h3>
   
                                    <LeadText color="blueGray">
                                        An artist of considerable range, Jenna
                                        the name taken by Melbourne-raised,
                                        Brooklyn-based Nick Murphy writes,
                                        performs and records all of his own
                                        music, giving it a warm, intimate feel
                                        with a solid groove structure. An artist
                                        of considerable range.
                                    </LeadText>
                                    <Portflio/>
                            
                                </div>
                                
                          
  )
}
