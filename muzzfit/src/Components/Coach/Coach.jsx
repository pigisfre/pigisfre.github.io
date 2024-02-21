import './Coach.css'
import React from 'react'
import { Fade} from 'react-awesome-reveal'


const Coach = () => {
    return (
    <>
       <div className='coach' id='trainer'>
            
        <div className='section'>
                <div className='description'>
                    <Fade direction='left' triggerOnce={true}>
                   <h1 style={{color : '#ff7514'}}>Trainer</h1>       
                    <h2 className='nome-coach'>Alessandro Fierro</h2>          
                    <p>Il ruolo di un coach della palestra e chinesiologo <br /> 
                    è estremamente importante nell'ambito del fitness e del benessere fisico. <br /> 
                    Questa figura professionale ha la responsabilità di guidare <br /> 
                    e supportare gli individui nel raggiungere i loro obiettivi di salute,<br />
                     fitness e benessere attraverso l'implementazione di programmi di allenamento personalizzati <br /> 
                     e l'offerta di consulenza specialistica basata sui principi della kinesiologia.</p></Fade>
                </div>
               
            </div>
            <Fade direction='right' triggerOnce={true}>
                 <div className='photo-profile'>
                    
                    <div class="card-profile"><img src="" alt="" /></div>
                    </div></Fade>
            </div>
            
        
    </>   
    );
}

export default Coach;