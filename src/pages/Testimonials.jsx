import React from 'react'
import { InView } from 'react-intersection-observer';


const Testimonials = () => {
  return (

<>


<InView triggerOnce="false">
    {({ inView, ref, entry }) => (

<h1 ref={ref} className={inView ? 'h1' : 'off'} >Testimonios <span>Recientes</span></h1>

)}
</InView>


<InView triggerOnce="false">
    {({ inView, ref, entry }) => (

<ul ref={ref} className={inView ? 'testimonialsFull' : 'off'}>
<li className="testimonialsCard">

<p>"Estoy asombrado por la profesionalidad y dedicación de María. Gracias a su asesoramiento, encontré la casa de mis sueños en tiempo récord. Su conocimiento del mercado y su enfoque personalizado hicieron que todo el proceso fuera fluido y sin estrés. ¡Gracias, María!"

</p>
<div className="client">

<div className="clientImg">

    <img src="https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg" alt="" />
</div>
<div className="clientName">

    <strong>Juan Perez</strong>
<p>Client</p>


</div>

</div>




</li>


<li className="testimonialsCard">

<p>"No puedo agradecer lo suficiente a María por su incansable esfuerzo en encontrar la casa perfecta para mi familia. Su atención a los detalles y su paciencia para responder a todas nuestras preguntas fueron impresionantes. ¡Definitivamente recomiendo sus servicios!"

</p>
<div className="client">

<div className="clientImg">

    <img src="https://cdn.pixabay.com/photo/2018/01/03/19/54/fashion-3059143_1280.jpg" alt="" />
</div>
<div className="clientName">

    <strong>Ana Sánchez</strong>
<p>Client</p>


</div>

</div>




</li>



<li className="testimonialsCard">

<p>"Como compradora primeriza, estaba llena de dudas y nerviosismo. María fue un verdadero apoyo durante todo el proceso. Siempre estuvo disponible para aclarar mis dudas y me guió de principio a fin. Estoy muy agradecida por su dedicación y conocimiento."

</p>
<div className="client">

<div className="clientImg">

    <img src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="" />
</div>
<div className="clientName">

    <strong>Laura Gómez</strong>
<p>Client</p>


</div>

</div>




</li>

</ul>


)}
</InView>

</>
    )
}

export default Testimonials