import React from 'react';
import { Button } from 'react-bootstrap';

const Right = () => {
    return (
   <>
            <div style={{flex:'3',marginTop:'15%',marginLeft:'3%'}}>
    <Button className="bg-yellow-600 hover:bg-yellow-400" style={{marginBottom:'3%'}}>Live preview</Button>
       <br/>
    <Button className="bg-yellow-600 hover:bg-yellow-400" style={{marginBottom:'3%'}}>Acheter</Button>
        </div>
        </>
    );
}

export default Right;
