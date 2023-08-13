import React from 'react'
import servicios from '../components/servicios.json';


const Services = () => {
  return (

 
    <>


<h1>Nuestros  <span>Servicios</span></h1>

<ul className="serviceBox">
        {servicios.services.map((service, index) => (
          <li className="container" key={index}>
            <i className={service.icon}></i>
            <div className="box">
            <h2 className="title">{service.title}</h2>
            </div>
            <p>{service.description}</p>
            <p>{service.description2}</p>

          </li>
        ))}
      </ul>


     
    </> 


    )
}

export default Services