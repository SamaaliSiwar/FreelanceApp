import Ratting from 'components/Posts/Ratting'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Heading from './Heading'

export default function OfferDetails() {
  return (
    <div style={{display:'flex' ,flexDirection:'column' ,alignItems:'center'}}>

         <Card border="warning" style={{textAlign:'center', width: '50%'}} >
    <Card.Header>
    <Heading/> 

    </Card.Header>
    <Card.Body>
  <img style={{width:'17%'}} src='data:image/png;base64,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'/>
      <Card.Text style={{display: 'grid'}}>
    
      Job Description

EMWorks is actively looking to hire a high-performance computing expert 
to join our R&D team to advance the art of computational electromagnetics, 
from DC to light. You will join a team of engineers and scientists tackling uniquely challenging 
computational electromagnetic problems that require massive parallelization under both Windows and
 Linux operating systems. Your knowledge in high-performance scientific computing, artificial intelligence,
  and hardware acceleration will empower you to play a leading role in the R&D team. You will develop 
  algorithms and code them in C/C++.<br/>

<strong>Exigences de l'emploi</strong>
<ul >
   <li >-Graduate degree, preferably a PhD, in computer science or engineering, applied Mathematics, or another scientific field that involves computational algorithms and massive computing.</li> 
<li>-Strong experience in scientific code development using C++ in Windows and Linux environments.
</li>
<li>-Experience in using MPI, OpenMP, CUDA, and GPU libraries for high performance computing.
</li>
<li>
-In-depth knowledge of numerical methods and linear algebra including sparse matrix solvers.
</li>
<li>-Background in FEM is a significant asset.
</li>
<li>-Prior experience with PETSc, PARDISO, or other toolkits is a big plus.
</li>
</ul>

Experience using HPC clusters is a significant asset.

Experience with code maintenance in a team and code review processes is a significant asset.      </Card.Text>
      <Ratting style={{textAlign:'center'}}/>
      <Button variant="outline-warning">Postuler</Button>
    </Card.Body>
  </Card>
    </div>
  )
}
