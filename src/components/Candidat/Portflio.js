import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
const Portflio = () => {
    const itemData = [
        {
          img: 'https://cdn6.f-cdn.com/files/download/101879104/b3532d.jpg',
          title: 'Breakfast',
        },
        {
          img: 'https://cdn2.f-cdn.com/files/download/156356317/0332be.jpg',
          title: 'Burger',
        },
        {
          img: 'https://cdn2.f-cdn.com/files/download/119756136/3ee3ad.jpg',
          title: 'Camera',
        },
        {
          img: 'https://cdn3.f-cdn.com/files/download/117055425/2da289.jpg',
          title: 'Coffee',
        },
        {
          img: 'https://cdn6.f-cdn.com/files/download/156669592/8da161.jpg',
          title: 'Hats',
        },
        {
          img: 'https://cdn6.f-cdn.com/files/download/76084549/14edcb.jpg',
          title: 'Honey',
        },
        {
          img: 'https://cdn3.f-cdn.com/files/download/113751311/44706b.jpg',
          title: 'Basketball',
        },
        {
          img: 'https://cdn5.f-cdn.com/files/download/119346597/112aab.jpg',
          title: 'Fern',
        },
        {
          img: 'https://cdn2.f-cdn.com/files/download/87486854/318f91.jpg',
          title: 'Mushrooms',
        },
        {
          img: 'https://cdn6.f-cdn.com/files/download/119754014/aadc3c.jpg',
          title: 'Tomato basil',
        },
        {
          img: 'https://cdn6.f-cdn.com/files/download/124085992/a57cea.jpg',
          title: 'Sea star',
        },
        {
          img: 'https://cdn3.f-cdn.com/files/download/127107304/f54ed5.jpg',
          title: 'Bike',
        },
      ];
    return (

        <div>
        <h2><strong>Portflio</strong></h2>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
        </div>
    );
}

export default Portflio;
