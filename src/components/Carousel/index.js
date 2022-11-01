import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 , itemsToScroll: 4},
];

export default function CarouselSlide() {
  return (
    <>
    <div style={{display:'flex' ,flexDirection:'column' ,alignItems:'center',marginTop:'3%',marginBottom:'2%'}}>
    <h2 class="text-2xl font-bold leading-7 text-yellow-700 sm:truncate sm:text-3xl sm:tracking-tight">Freelancer Services</h2>
    </div>
      <div >
    
        <Carousel breakPoints={breakPoints}>
         
          <Item><img alt="" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"></img> <p style={{position:'absolute'}}>Text</p></Item>
          <Item><img alt="" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"></img>
          <p style={{position:'absolute'}}>Text</p>
         </Item>
          <Item><img alt="" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" />
          <p style={{position:'absolute'}}>Text</p></Item>
          <Item><img alt="" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png" />
          <p style={{position:'absolute'}}>Text</p>
          </Item>
          <Item><img alt="" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png" />
          <p style={{position:'absolute'}}>Text</p></Item>
          <Item><img alt="" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png" />
          <p style={{position:'absolute'}}>Text</p></Item>
          <Item><img alt="" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png" />
          <p style={{position:'absolute'}}>Text</p></Item>
          <Item><img alt="" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png" />
          <p style={{position:'absolute'}}>Text</p>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

