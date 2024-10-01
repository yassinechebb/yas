import React from 'react'

function MainVideo() {
  return (
    <div>
      <iframe style={{borderRadius:'20px'}} width="800" height="500" src="https://www.youtube.com/embed/salY_Sm6mv4?si=oXm-pyX1cGyzjpcZ" title="YouTube video player" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen></iframe>
      <h3> HTML in 5 minutes</h3>
      <p>421.95 M abonnés</p>
    </div>
  )
}

export default MainVideo