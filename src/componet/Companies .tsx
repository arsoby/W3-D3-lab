import React from 'react'
interface Services{
  typeOfSerivce:string,
  preductPrice:number
}
interface Companies  {
    name:string,
    numOfEmployee:number,
    dEstablishment:number,
}
let c1:Companies={
  name:"With My Self",
  numOfEmployee:85,
  dEstablishment:1909
}
let c2:Companies={
  name:" My Self",
  numOfEmployee:45,
  dEstablishment:2015
}
let c3:Companies={
  name:"With Mine",
  numOfEmployee:150,
  dEstablishment:2000
}
function Companies (props:Services) {
  return (
    <div>
      <p>Name of company:{c3.name}</p>
      <p>Date Of Establish:{c3.dEstablishment}
      </p>
      <p>Number Of Employee:{c3.numOfEmployee}
      </p>
      <p> {props.preductPrice} </p>
      <p> {props.typeOfSerivce} </p>
      </div>
  )
}

export default Companies 