import React from 'react'
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';



const Prices = () => {


  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce:true
  });
  return (


<>

<h1 ref={ref} className={inView ? 'h1' : 'off'}>Precios <span>Plan</span></h1>



<div className="pricesType">

<InView triggerOnce="false">
    {({ inView, ref, entry }) => (

<p ref={ref} className={inView ? 'chooseService' : 'off'}>Elige Tu Ubicacion</p>

)}
</InView>


<h4>Santiao</h4>

<pre>$6,000.00</pre>

<h4>Santo Domingo</h4>


<pre>$8,000.00</pre>



</div>


<div className="pricesType">


<InView triggerOnce="false">
    {({ inView, ref, entry }) => (

<p ref={ref} className={inView ? 'chooseService' : 'off'}>Elige Tu Servicio</p>

)}
</InView>


<h4>Asesoramiento Personalizado</h4>

<pre>$1,500</pre>

<p className="align-self-center"> <i className="bi bi-check-lg"></i> Por Documento</p>

<h4>Evaluación de Propiedades</h4>

<pre>$1,500</pre>

<p className="align-self-center"> <i className="bi bi-check-lg"></i> Por Documento</p>
<p className="align-self-center"> <i className="bi bi-check-lg"></i> Por Servicios Adicionales</p>


<h4>Gestión de Documentación</h4>

<pre>$1,500</pre>

<p className="align-self-center"> <i className="bi bi-check-lg"></i> Por Documento</p>

<h4>Asesoramiento en Inversiones</h4>

<pre>$1,500</pre>

<p className="align-self-center"> <i className="bi bi-check-lg"></i> Por Documento</p>
<p className="align-self-center"> <i className="bi bi-check-lg"></i> Por Servicios Adicionales</p>

<h4>Servicios Extras</h4>

<pre>Contactame</pre>


</div>




</>



    )
}

export default Prices