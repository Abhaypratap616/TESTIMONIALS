import React from 'react'
import Card from '../components/Card';
const Testimonials = (props) => {
    let anmol = props.data;
    let index = props.index;
    let setindex = props.setindex;
  return (
    <div>
        <Card review={anmol} index={index} setindex = {setindex}  ></Card>
    </div>
  )
}

export default Testimonials;
