import './Footer.css'

const Footer = () => {
    return(
        <>
        <footer>
            <div className='struttura'>
                <div className='social'>
                    <div className='social-item'>
                       <p>Privacy policy</p> 
                    </div>
                    
                 
                    <div className='social-item'>
                      <p> © 2024 Pierluigi Sfregola. <br /> All rights reserved. </p>  
                    </div>
                    
                </div>
                 <div className='slog'>
                    <p style={{color : '#246b74'}}>MUZZ</p>
                    <p style={{color : '#ff7514'}}>FIT</p>
                 </div>
                
            </div>
            
        </footer>
        </>
    )
}

export default Footer;