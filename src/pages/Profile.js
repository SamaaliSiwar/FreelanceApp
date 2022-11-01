import DefaultFooter from 'components/DefaultFooter';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Top from 'components/Candidat/Top';
import Center from 'components/Candidat/Center';
import Right from 'components/Candidat/Right';

export default function Profile() {
    return (
        <>
          <Breadcrumb style={{marginTop:'8%'}}>
      <Breadcrumb.Item href="/">services</Breadcrumb.Item>
      <Breadcrumb.Item href="/posts">
        service
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Profile</Breadcrumb.Item>
    </Breadcrumb>
            <div style={{display:'flex',flexDirection:'row',marginBottom:'15%',
    flexWrap:'wrap',
    alignContent:'center',
    justifyContent:'space-between'}}>
   
            <Top/>
            <Center/>
            <Right/>
           
            </div>
            <DefaultFooter />
        </>
    );
}
