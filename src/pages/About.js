import React from "react";
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="section about-section">
        
      <h1 className="section-title">Sobre Nosotros</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
      <Link to='/' className='btn btn-primary'>
          volver
        </Link>
    </section>
  );
}
