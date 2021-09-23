import s1 from "./images/s1.jpg"
import s2 from "./images/s2.jpg"
import s3 from "./images/s3.jpg"
import s4 from "./images/s4.jpg"
import s5 from "./images/s5.jpg"
import s6 from "./images/s6.jpg"
import bed from "./images/bed.jpg"
import img1 from "./images/img1.jpg"
import img21 from "./images/img21.jpg"
import img22 from "./images/img22.jpg"
import img23 from "./images/img23.jpg"
import img24 from "./images/img24.jpg"
import by from "./images/by.jpg"
import box from "./images/box.jpg"
import gl from "./images/gl.jpg"
import tv from "./images/tv.jpg"
import lcd from "./images/lcd.jpg"
import img11 from "./images/img11.jpg"
import img12 from "./images/img12.jpg"
import img13 from "./images/img13.jpg"
import img14 from "./images/img14.jpg"
import img31 from "./images/img31.jpg"
import img32 from "./images/img32.jpg"
import img33 from "./images/img33.jpg"
import img34 from "./images/img34.jpg"
import tab from "./images/tab.jpg"

const Data={
    carousel:{
        img1:s1,img2:s2,img3:s3,img4:s4,img5:s5,img6:s6
    },
    product1:{
        key:1,
        img1:img1,
        img3:by,
        cardbox1:{
            
          img1:img11,
          img2:img12,
          img3:img13,
          img4:img14
        }
        ,img4:box
    }
,product2:{
     key:2,
    img1:gl,
    img2:tv,
    cardbox2:{ 
    img1:img21,
    img2:img22,
    img3:img23,
    img4:img24
}
    ,img4:lcd
},
product3:{
    key:3,
    cardbox3:{ 
        img1:img31,
        img2:img32,
        img3:img33,
        img4:img34
     },
   img2:tab,
   img3:bed,
   
   cardbox4:{ 
    img1:img31,
    img2:img32,
    img3:img33,
    img4:img34
 }
}
}

export default Data
