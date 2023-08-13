import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Services from './pages/Services';
import Prices from './pages/Prices';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { InView } from 'react-intersection-observer';


function App() {

  return (
    <>
    <main className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
    <Navbar/>



    <section id="home">

      <Home/>

    </section>



    <InView>
    {({ inView, ref, entry }) => (

    <section id="services" ref={ref} className={inView ? 'services' : 'off'}>


      <Services/>

    </section>
 )}
 </InView>


<section id="prices">

<Prices/>


</section>


<section id="about">

<About/>


</section>


<section id="testimonials" >

  <Testimonials/>
</section>

<section id="contact">


<Contact/>


</section >


<section id="footer">

<Footer/>

</section>

      </main>
    </>
  )
}

export default App
