import React from 'react'
import { InView } from 'react-intersection-observer';

const About = () => {
  return (

      <>



<div className="info">
<InView triggerOnce="false">
    {({ inView, ref, entry }) => (

<h1 ref={ref} className={inView ? 'h1' : 'off'}>Sobres <span>Marelin Zick</span></h1>

)}
</InView>


<InView triggerOnce="false">
    {({ inView, ref, entry }) => (

<h3 ref={ref} className={inView ? 'aboutMe' : 'off'}>Marelin Zick, soy experimentada Profesional en Bienes Raíces y agente inmobiliaria con un historial comprobado de más de 7 años en la industria.
</h3>

)}
</InView>


<InView triggerOnce="false">
    {({ inView, ref, entry }) => (


<div ref={ref} className={inView ? 'calification' : 'off'}>

<p className="align-self-center"> <i className="bi bi-check-lg"></i> Especialista en Ventas de Viviendas con Experiencia
</p>


<p className="align-self-center"> <i className="bi bi-check-lg"></i> Sirviendo al La Provincia de Santiago

</p>


<p className="align-self-center"> <i className="bi bi-check-lg"></i> Comprometida con tus Objetivos de Propiedad

</p>


<p className="align-self-center"> <i className="bi bi-check-lg"></i> Consulta de Propiedad Gratuita"

</p>
</div>

)}
</InView>

<button>Contactar a Marelin Zick </button>

</div>



<InView triggerOnce="false">
    {({ inView, ref, entry }) => (

<div ref={ref} className={inView ? 'img' : 'off'}>

<img src="img/marelin.jpg" alt="" />

</div>


)}
</InView>

</>
  )
}

export default About