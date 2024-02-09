import React from 'react'
import './Home.css'
import { Typewriter} from 'react-simple-typewriter'



const Home = () => {


    return(
        <>
        <div className='home'>
           <div className='pt'>
           </div>
           <div className='description'>
            <h1 style={{fontFamily: 'Bebas Neue'}}>SWEAT IT TODAY, AND OWN TOMORROW.
                <br />
                <span style={{ color: '#ff7514', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['UNLOCK YOUR GREATNESS', 'UNLASH YOUR POTENTIAL',]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
            </h1>
            <button>
  <span>Join us</span>
</button>
           </div>
        </div>
        </>
    )

}


export default Home;