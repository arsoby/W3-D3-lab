import React from 'react'
import "./Card-css.css";
import ReactImage from "../assets/react.svg"
import Prog from "./Companies ";
import Comp from "./Programers ";
function Card(c1:Comp,propP:Prog) {
  return (
<div className="cards">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{propP.name}</h5>
          <p className="card-text">
            {/* <img className='card-img'  src={ReactImage} alt="" /> */}
          </p>
          <button type="button" className="btn btn-primary">
            Button
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" className="btn btn-primary">
            Button
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" className="btn btn-primary">
            Button
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" className="btn btn-primary">
            Button
          </button>
        </div>
      </div>
    </div>

 


  )
}

export default Card
