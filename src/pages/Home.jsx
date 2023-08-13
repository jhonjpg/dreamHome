import React, { useState } from 'react'
import SlickCarousel from '../components/SlickCarousel'

const Home = () => {

  const [iconClicked, setIconClicked] = useState(false);

  const handleClick = () => {
    setIconClicked(!iconClicked);
    if (iconClicked) {
      document.documentElement.style.setProperty('--dark-color', '#000');
      document.documentElement.style.setProperty('--light-color', '#ffff');
      document.documentElement.style.setProperty('--letter-light', 'rgb(255, 255, 255)');
      document.documentElement.style.setProperty('--letter-dark', 'rgb(31, 31, 31)');
      document.documentElement.style.setProperty('--shadow-color', 'rgb(180, 180, 180) 0px 20px 30px -10px');
      document.documentElement.style.setProperty('--text-color', 'white');
      document.documentElement.style.setProperty('--page-color', '#8f6a03');
    } else {
      document.documentElement.style.setProperty('--dark-color', '#ffff');
      document.documentElement.style.setProperty('--light-color', '#000');
      document.documentElement.style.setProperty('--body-color', 'rgb(194, 194, 194)');
      document.documentElement.style.setProperty('--letter-dark', 'new-color-value');
      document.documentElement.style.setProperty('--shadow-color', 'new-color-value');
      document.documentElement.style.setProperty('--text-color', 'new-color-value');
      document.documentElement.style.setProperty('--page-color', 'new-color-value');
    }
  };

  return (
<>

<div className="opacity"></div>


<header>




<div className="logo">

  <img src="img/dreamlogo.jpg" alt="" />
</div>




<i onClick={handleClick} className="bi bi-moon-fill"></i>



</header>

<SlickCarousel/>


</>

)
}

export default Home