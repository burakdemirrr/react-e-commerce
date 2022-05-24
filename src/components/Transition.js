import React, {useRef,useEffect} from 'react'
import "./Transition.css"
import {Expo, Power0, Power1, Power4} from "gsap";
const Transition = ({timeline}) => {
    
    const trans=useRef(null);
    useEffect(()=>{
        timeline.to(trans.current,{
            duration:2.5,
            x:-2000,
        },"-=3")
    })

    return (
        <div>
            <div className="transition-effect" ref={trans}></div>
        </div>
    )
    }

export default Transition