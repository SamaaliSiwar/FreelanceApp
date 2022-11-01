import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PaginationControlled from './Pagination';
import Ratting from './Ratting';
export default function AllPost() {
  const [posts, setposts] = useState('');
  useEffect(() => {
    const AllPost= async () => {
      try {
        const url = `http://localhost:5000/api/posts/`;
      const post = await axios.get(url);
      setposts(post.data.posts);
      // eslint-disable-next-line no-alert
       } catch (error) {
        if (error.response && error.response.status >= 400 && error.response.status <= 500) {
         return(error.response.data.message);
        }
  }
}
AllPost();
console.log(posts);

}, []);
  return (
   <>
   <div style={{display:'flex' ,flexDirection:'column' ,alignItems:'center'}}>
   {posts && posts.map((post) => (
   <Card border="warning" style={{marginBottom:'5%'}}>
    
      <Card.Body>
        <Card.Title>{post.Title}</Card.Title>
        <Card.Text style={{display: 'grid'}}>
        <img alt="" style={{width:'17%'}} src={post.img}></img>
         {post.desc}
        </Card.Text>
        <Ratting/>
        <Button variant="outline-warning">Postuler</Button>
        <a href='/'>Voir Plus</a>
      </Card.Body>
    </Card>
 
  ))}

   
  <PaginationControlled/>
 </div>
   </>
  )
}
