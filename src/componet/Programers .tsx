import React from 'react'
interface Programers {
    name:string,
    pLanguge:string,
    exp:number,
    company:string
}
let p1:Programers={
  name:"Abdulrahman",
  pLanguge:'Html, Css, Js',
  exp:0.02,
  company:"With My self.inc"
}
let p2:Programers={
  name:"Hamed",
  pLanguge:'Html, Css',
  exp:5,
  company:" My self.inc"
}
let p3:Programers={
  name:"Naser",
  pLanguge:'C#',
  exp:0.02,
  company:"With Mine"
}

function Programers () {
  return (
    

    
    <div>

    
      <p>Name:{p1.name}</p>
   <p>Programing Languge:{p1.pLanguge}</p> 
   <p>    Experince Years: {p1.exp}</p> 
   <p>Company:{p1.company}</p> 
    
      <p>Name:{p2.name}</p>
   <p>Programing Languge:{p2.pLanguge}</p> 
   <p>    Experince Years: {p2.exp}</p> 
   <p>Company:{p2.company}</p> 
    
      <p>Name:{p3.name}</p>
   <p>Programing Languge:{p3.pLanguge}</p> 
   <p>    Experince Years: {p3.exp}</p> 
   <p>Company:{p3.company}</p> 
    
    
    
     </div>
   
     )
}

export default Programers 