import React from "react";
import './About.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';


const slides = [
  {
    title: 'Small classes',
    subtitle : "Sessioni di allenamento con pochi partecipanti  per garantire una supervisione più personalizzata.",
    className: 'small-classes-slide'

  },
  {
    title: 'Personal Training',
    subtitle : "Istruzioni personalizzate, supporto e motivazione.",
    className: 'personal-training-slide'
  },
  {
    title: 'Functional Training',
    subtitle : " Allenamento basato sui movimenti naturali per migliorare forza e flessibilità.",
    className: 'functional-training-slide'
  },
  {
    title: 'Strech & Recovery',
    subtitle : "Rigenerati e recupera con stretching e tecniche di respirazione.",
    className: 'stretch-recovery-slide'

  },
]
const About = () => {

    return(
      <>
      <div className="card">
    <ReactCarousel
      className="react-carousel"
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      autoPlay={true}
      infiniteLoop={true}
    >
      {slides.map((slide) => (
        <div key={slide.title} className="react-carousel-slide"> 
        <div className={slide.className}>
          <div className="about-us">
            <h1>About us</h1>
            <p>Cosa offriamo?</p>
          </div>
          <div className="offerta">
          <h2 style={{color : '#ff7514'}}>{slide.title}</h2>
          <h3>{slide.subtitle}</h3>
          </div>
          
          </div> 
         
        </div>
      ))}
    </ReactCarousel>
  </div>

  </>
    );
}

export default About;