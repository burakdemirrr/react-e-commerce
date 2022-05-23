import React, {useRef,useEffect} from 'react'
import "./Transition.css"
import {Power1, Power4} from "gsap";
const Transition = ({timeline}) => {
    
    const trans=useRef(null);
    useEffect(()=>{
        timeline.to(trans.current,{
            duration:5,
            delay:.7,
            y:1000,
        },"-=3")
    })

    return (
        <div>
            <div className="transition-effect" ref={trans}></div>
        </div>
    )
    }

export default Transition