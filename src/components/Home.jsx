import React from 'react'
import {Link} from 'react-router-dom'

const Home = (props) => {
  return (
    // <div>
    //   <Link to={"/"}>hme</Link>
    //   <Link to={"/About"}>contacts</Link>
    // </div>
    <>

   <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link class="navbar-brand" to="/"><h5>{props.title}</h5></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/About">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Contact">Contact</Link>
      </li>
     
    
    </ul>
   
  </div>
  <div className="form-check form-switch m-2">
       <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick ={props.toggleMode}/>
       
     </div>
</nav>
   
   
   </>
  )
}

export default Home