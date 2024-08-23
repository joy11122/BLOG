import React from 'react'

const Navbar = () => {
    return (
        <div>
             <div className="navbar-container">
         <div className="socialpart">
             <i className="bi bi-instagram"></i>
             <i className="bi bi-instagram"></i>
             <i className="bi bi-instagram"></i>
             <i className="bi bi-instagram"></i>
             
         </div>
         <div className="logopart"><h3>Joy.com</h3></div>
         <div className="linkpart">
             <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Blog</a>
         </div>
         <div className="bar">
             <i className="bi bi-list"></i>
         </div>
         
         <div className="linkonclick">
             <a href="/">Home </a>
             <a href="/">About </a>
             <a href="/">Contact </a>
             <a href="/">Blog </a>
             </div>
     </div>   
        
        </div>
    )
}

export default Navbar
