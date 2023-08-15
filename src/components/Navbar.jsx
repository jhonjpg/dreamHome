import React, { useEffect, useState } from 'react'
import { Link as ScrollLink, animateScroll } from 'react-scroll';



const Navbar = () => {





    const [menu, setmenu] = useState(true);


  
    const [linkColor, setLinkColor] = useState('white');

  

const change = (e) => {

  if (window.scrollY >= 200) {

    setmenu(false)
  } else {
    setmenu(true)

  }




}






window.addEventListener("scroll", change)







  return (


    <>


    {/* phone Nav */}
<nav className="nav " >

<div className="blur"></div>

       <ul className="" >


<li className="nav-item"  > 
< ScrollLink
to="home"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"


> <i className="bi bi-house-door-fill"></i>
</ScrollLink>
</li>
             
     <li className="nav-item" > 
     < ScrollLink
to="services"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item" 
> <i className="bi bi-journal-check"></i>
</ScrollLink>
</li>
     
     <li className="nav-item" > 
     < ScrollLink
to="prices"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
>  <i className="bi bi-currency-dollar"></i>
</ScrollLink>
</li>


     <li className="nav-item"> < ScrollLink
to="about"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
>  <i className="bi bi-person-bounding-box"></i></ScrollLink></li>
     
     
     <li className="nav-item"> < ScrollLink
to="testimonials"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
>  <i className="bi bi-layout-text-sidebar-reverse"></i></ScrollLink></li>


     <li className="nav-item"> < ScrollLink
to="contact"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
>  <i className="bi bi-telephone-fill"></i></ScrollLink></li>




   </ul>


     </nav>











{/* other device */}
<div className="devices">





<ul className="" >


<li className="nav-item"  > 
< ScrollLink
to="home"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"


> INICIO
</ScrollLink>
</li>
             
     <li className="nav-item" > 
     < ScrollLink
to="services"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item" 
> SERVICIOS
</ScrollLink>
</li>
     
     <li className="nav-item" > 
     < ScrollLink
to="prices"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
>  PRECIOS
</ScrollLink>
</li>


     <li className="nav-item"> < ScrollLink
to="about"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
>  SOBRE MI</ScrollLink></li>
     
     
     <li className="nav-item"> < ScrollLink
to="testimonials"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
>  TESTIMONIOS</ScrollLink></li>


     <li className="nav-item"> < ScrollLink
to="contact"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
> CONTACTOS</ScrollLink></li>




   </ul>



     </div> 




    </>

    )
}

export default Navbar