import React from 'react'
import './Card.css';



import { CgChevronDoubleDown , CgChevronDoubleUp } from "react-icons/cg";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
const Card = (props) => {
    let abhay = props.review;
    let index = props.index;
    let setindex = props.setindex;
    

    function leftsift(){
      if(index-1<0){
        setindex(abhay.length-1)
      }
      else{
        setindex(index-1)
      }
    }
    function rightsift(){
      if(index+1>=abhay.length){
        setindex(0)
      }
      else{
        setindex(index+1)
      }
    }
    function surprisefun(){
      let random = Math.floor(Math.random()*abhay.length);
      setindex(random);
    }

  return (
    <div>
      <div className="imgclass">
        <img src={abhay.image}/>
      </div>
      <div className="name">
        <h3>{abhay.name}</h3>
      </div>
      <div className="job">
        <h4>{abhay.job}</h4>
      </div>
      <div className="icon">
      <CgChevronDoubleDown />
      </div>
      <div className="text">
        <p>{abhay.text}</p>
      </div>
      <div className="icon-2">
      <CgChevronDoubleUp />
      </div>
      <div className="siderleft">
      <button onClick={leftsift}><AiOutlineCaretLeft /></button>
      <button onClick={rightsift}><AiOutlineCaretRight /></button>
      </div>
      <div className="btn">
     <button onClick={surprisefun}>SURPRISE ME</button>
      </div>
    </div>
  )
}

export default Card;
