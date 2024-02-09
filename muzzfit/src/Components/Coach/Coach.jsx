import './Coach.css'
import React from 'react'


const Coach = () => {
    return (
    <>
       <div className='coach'>
            
        <div className='section'>
                <div className='description'>
                <h1 style={{color : '#ff7514'}}>Trainer</h1>
                    <h2>Alessandro Fierro</h2>
                    <p>Il ruolo di un coach della palestra e chinesiologo <br /> 
                    è estremamente importante nell'ambito del fitness e del benessere fisico. <br /> 
                    Questa figura professionale ha la responsabilità di guidare <br /> 
                    e supportare gli individui nel raggiungere i loro obiettivi di salute,<br />
                     fitness e benessere attraverso l'implementazione di programmi di allenamento personalizzati <br /> 
                     e l'offerta di consulenza specialistica basata sui principi della kinesiologia.</p>
                </div>
               
            </div>
         <div className='photo-profile'>
                    
                    <div class="card-profile"><img src="" alt="" /></div>
                    </div>
            </div>
    </>   
    );
}

export default Coach;