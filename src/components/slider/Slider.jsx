// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


// import { useEffect, useState } from 'react'
// import './Slider.css'
// import One from './img/pizzaOne.jpg'
// import Two from './img/pizzaTwo.jpg'
// import Three from './img/pizzaThree.jpg'
// import Four from './img/pizzaFour.jpg'
// import Five from './img/pizzaFive.jpg'

// const Slider =(item)=> {
//     const [pages, setPages] = useState([])
    
//     useEffect(() => {
//         setPages(

//         )
//     })
//     return(
//         <div className="main-container">
//             <div className="window">
//                 <div className="all-pages-container">
//                     {/* <div className='item item-1'>{item}</div>
//                     <div className='item item-2'>{item}</div>
//                     <div className='item item-3'>{item}</div> */}

//                     <img className='pictere' src={One} alt="" />
//                     <img className='pictere' src={Two} alt="" />
//                     <img className='pictere' src={Three} alt="" />
//                     <img className='pictere' src={Four} alt="" />
//                     <img className='pictere' src={Five} alt="" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Slider
