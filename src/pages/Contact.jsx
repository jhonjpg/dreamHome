import React from 'react'
import { InView } from 'react-intersection-observer';


const Contact = () => {
  return (
<>


<InView triggerOnce="false">
    {({ inView, ref, entry }) => (


<h1 ref={ref} className={inView ? 'h1' : 'off'}>Contac<span>tame</span></h1>

)}
</InView>

<InView triggerOnce="false">
    {({ inView, ref, entry }) => (

<p ref={ref} className={inView ? 'fill' : 'off'}>Porfavor llenar los campose que se muestran abajp o llamame <span>809-494-4343</span></p>
)}
</InView>


<h2>Formulario de Contacto</h2>

<form action="">

<input type="text" placeholder="Nombre"/>

<input type="email" placeholder="email"/>

<input type="tel" placeholder="telefono" />

<textarea name="" id="" cols="30" rows="10" placeholder="Comentario"></textarea>



<button>Enviar</button>

</form>



</>  )
}

export default Contact