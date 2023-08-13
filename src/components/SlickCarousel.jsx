import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const SlickCarousel = () => {
    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };


    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Hace que el slider se reproduzca automáticamente
        autoplaySpeed: 3000, // Intervalo de tiempo entre transiciones (en milisegundos)
      };

      const carousel = {
        words: [
          "Tu casa ideal te espera.",
          "Encuentra tu refugio ideal.",
          "Compra la casa de tus sueños.",
          "Llámame. Encontraremos la casa de tus sueños."
        ],
        House: [
          "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
          "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
      };
      
    return (
        <div className="galeria">
           <Slider {...settings}>
          {carousel.House.map((item, index) => (
            <div key={index} className="divImg">
              <img src={item} alt={`House ${index + 1}`} />
              <h2>{carousel.words[index]}</h2>
            </div>
          ))}
        </Slider>
        </div>
    )
}

export default SlickCarousel