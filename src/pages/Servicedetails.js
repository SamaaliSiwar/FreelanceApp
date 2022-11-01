import Top from 'components/Candidat/Top';
import DefaultFooter from 'components/DefaultFooter';
import Right from 'components/Service/Right';
import ServiceDTails from 'components/Service/ServiceDétails';
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const Servicedetails = () => {
    return (
       <>
         <Breadcrumb style={{marginTop:'8%'}}>
      <Breadcrumb.Item href="/">services</Breadcrumb.Item>
      <Breadcrumb.Item href="/posts">
        service
      </Breadcrumb.Item>
    </Breadcrumb>
            <div style={{display:'flex',flexDirection:'row',marginBottom:'15%',
    flexWrap:'wrap',
    alignContent:'center',
    justifyContent:'space-between'}}>
   
            <Top/>
            <ServiceDTails/>
            <Right/>
           
            </div>
            <DefaultFooter />
       </>

    );
}

export default Servicedetails;
